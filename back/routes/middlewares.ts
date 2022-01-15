import { Request, Response, NextFunction } from 'express';

exports.isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
  }
};
