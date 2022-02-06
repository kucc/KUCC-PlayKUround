# Base on offical Node.js Alpine image
FROM node:14-alpine as builder

# Set working directory
WORKDIR /app

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
# 나중에 production 추가하가
RUN yarn install --frozen-lockfile 

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

