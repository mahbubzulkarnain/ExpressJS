FROM node:10-alpine
MAINTAINER "Mahbub Zulkarnain <mahbub.zulkarnain@gmail.com>"

RUN mkdir -p /home/node/template/express-js/node_modules && chown -R node:node /home/node/template/express-js
WORKDIR /home/node/template/express-js
COPY package*.json ./
USER node

RUN npm install
COPY --chown=node:node . .

USER root

RUN apk update \
  apk add --update python python-dev py-pip build-base \
  && apk add git zip unzip vim nano \
  && rm -rf /var/cache/apk/* \
  && apk add --no-cache bash

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 8080
CMD [ "node", "bin/www" ]
