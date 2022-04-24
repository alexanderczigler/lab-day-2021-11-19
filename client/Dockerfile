FROM node:18-alpine

ADD package.json .
ADD package-lock.json .
RUN npm ci

ADD adapters/ adapters/
ADD config.js .
ADD index.js .

CMD npm start
