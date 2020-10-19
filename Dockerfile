FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install -g @angular/cli
RUN npm install
COPY . .
EXPOSE 4200/tcp
CMD npm run start