FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "resetdb" ]

CMD ["npm", "run", "dev"]
