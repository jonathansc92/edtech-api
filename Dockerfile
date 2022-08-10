FROM node:18-alpine

WORKDIR  /home/edtech-api

COPY package*.json ./

RUN npm install
RUN npx sequelize-cli init

COPY . .

CMD [ "node", "server.js" ]