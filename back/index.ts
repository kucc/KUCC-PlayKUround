import { NextFunction, Request, RequestHandler, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { sequelize } from './models';

const express = require('express');

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const helmet = require('helmet');
const hpp = require('hpp');
const morgan = require('morgan');
const path = require('path');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const logger = require('./logger');

dotenv.config();

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASSWORD,
});

const userRouter = require('./routes/user');
const placeRouter = require('./routes/place');
const commentRouter = require('./routes/comment');
const hashtagRouter = require('./routes/hashtag');

const passportConfig = require('./passport');

class HttpRequestError extends Error {
  constructor(public message: string, public status?: number) {
    super(message);
    this.status = status;
  }
}

const app = express();
const port = process.env.PORT || 8000;
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();

// swaggerfile yaml 변환
const swaggerSpec = YAML.load(path.join(__dirname, '../dist/swagger/swagger.yaml'));

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  app.use(morgan('combined'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
  app.use(
    cors({
      origin: 'http://localhost:3000/', // 배포시 프론트 주소 적어주기
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  // proxy: true,
  cookie: {
    httpOnly: true,
    secure: false,
    // secure: true,
    domain: process.env.NODE_ENV === 'production' && 'http://localhost:3000', // 배포 시에 프론트 주소 적어주기
  },
  store: new RedisStore({ client: redisClient }),
};
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('백엔드 서버 실행중');
});

// 라우터
// swagger의 route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/user', userRouter);
app.use('/api/place', placeRouter);
app.use('/api/comment', commentRouter);
app.use('/api/hashtag', hashtagRouter);

// 404처리 미들웨어
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpRequestError(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  logger.info('hello');
  logger.error(error.message);
  next(error);
});

// 에러 처리 미들웨어
// eslint-disable-next-line no-unused-vars
app.use((err: HttpRequestError, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  // 개발 모드일 때는 에러를 보여주게 하고, 배포일 때는 보여주지 않게 하는 코드
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`${port}번 서버 실행 중!`);
});
