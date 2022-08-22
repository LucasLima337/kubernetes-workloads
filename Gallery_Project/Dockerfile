FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 9000

ENTRYPOINT [ "npm", "start" ]
