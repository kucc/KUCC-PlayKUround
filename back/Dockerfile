FROM node:16-alpine

WORKDIR /app

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

COPY package.json ./
COPY yarn.lock ./

# production으로 수정
RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn run build

EXPOSE 8000

CMD ["yarn", "run", "start"]