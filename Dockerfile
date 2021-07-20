FROM node:16-stretch
WORKDIR /app

COPY . .
RUN yarn install

CMD ["node", "index.js"]

EXPOSE 80
