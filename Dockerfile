FROM node:14-alpine

RUN apt-get update && apt-get install -y --no-install-recommends qemu-user-static

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN [ "cross-build-start", "--platform", "arm64" ]
RUN yarn install
RUN [ "cross-build-end" ]

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]