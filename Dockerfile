# Frontend builder 
FROM node:16.2.0-stretch AS builder

RUN apt update && apt dist-upgrade -y
RUN mkdir /dev
WORKDIR /dev
COPY frontend .

RUN npm install && \
    npm run build

# Frontend
FROM nginx:1.21.0 AS frontend

WORKDIR /usr/share/nginx/html
COPY --from=builder /root/build .
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
