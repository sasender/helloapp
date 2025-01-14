#base image
FROM node:alpine

#install dependancies
WORKDIR /usr/helloapp
COPY ./package.json ./
RUN npm install -y
COPY ./ ./

#start-up command
CMD ["npm", "start"]