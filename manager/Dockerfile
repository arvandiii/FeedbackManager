FROM node:14-alpine

COPY package*.json ./
RUN npm install
RUN npm install pm2@latest -g
COPY . .

EXPOSE 4000

CMD ["pm2-runtime", "start", "./src/app.js"]