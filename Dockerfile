FROM node:22.16-alpine

WORKDIR /app

COPY package*.json ./
COPY index.js ./

ENTRYPOINT ["npm", "run", "main"]