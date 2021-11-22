FROM node:13.12.0-alpine

WORKDIR /app

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --silent
RUN npm install tailwindcss

COPY . /usr/src/app

RUN npm run build-storybook

EXPOSE 3100

CMD ["npm", "run", "serve"]