FROM node:14

WORKDIR /app/frontend

COPY package.json ./app/frontend

RUN npm install 

RUN npm install react-scripts@3.4.1 -g 

COPY . ./app/frontend
