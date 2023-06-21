# Stage 1: 빌드 환경 설정
FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2: 실행 환경 설정
FROM arm64v8/node:14-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/.next ./.next

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]
