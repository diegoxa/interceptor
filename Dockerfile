FROM node:16-buster
WORKDIR /app

COPY . .
RUN yarn install

CMD ["node", "index.js"]

EXPOSE 80
