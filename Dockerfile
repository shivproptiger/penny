FROM vishalsngl/node:10.16-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i -s

EXPOSE 3738
