FROM node:14 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM arm64v8/node:14-alpine

WORKDIR /app

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/.next ./.next

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]