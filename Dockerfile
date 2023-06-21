FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./


RUN [ "cross-build-start" ]
RUN yarn
RUN [ "cross-build-end" ]


COPY . .


RUN yarn build


EXPOSE 3000

CMD ["yarn", "start"]
