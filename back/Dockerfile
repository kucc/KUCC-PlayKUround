FROM node:16-alpine

WORKDIR /app

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY ./ ./

RUN yarn add typescript

RUN yarn run tsc --build

RUN yarn run api-docs

EXPOSE 8000

CMD ["yarn", "run", "start"]