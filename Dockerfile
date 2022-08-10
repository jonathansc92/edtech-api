FROM node:18-alpine

WORKDIR  /home/edtech-api

COPY package*.json ./

RUN npm install
RUN npm install --save-dev sequelize sequelize-cli
RUN npx sequelize-cli init
RUN npx sequelize-cli db:migrate

COPY . .

CMD [ "node", "server.js" ]