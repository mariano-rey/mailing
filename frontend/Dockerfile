FROM node:latest

RUN yarn global add esbuild-linux-64@0.13.15
WORKDIR /app
COPY package*.json ./

COPY . .
 
RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]
