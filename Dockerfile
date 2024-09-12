# Fetching the latest node image on apline linux
FROM node:alpine AS builder

RUN mkdir /usr/app

# Copying all the files in our project
COPY . /usr/app

# Setting up the work directory
WORKDIR /usr/app

# Installing dependencies

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH


# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copying built assets from builder
COPY --from=builder /usr/app/build .


# Command to run the web server.
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Copying our nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf