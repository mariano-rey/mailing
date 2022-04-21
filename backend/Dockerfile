FROM node:latest

WORKDIR /app
COPY package*.json ./

COPY . .
 
RUN yarn

EXPOSE 5050

CMD ["yarn", "dev"]
