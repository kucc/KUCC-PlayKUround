FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# production으로 수정
RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn run build

EXPOSE 5000

CMD ["yarn", "run", "startJS"]