# Frontend builder 
FROM node:16.2.0-stretch AS builder

RUN apt update && apt dist-upgrade -y
WORKDIR /srv
COPY frontend .

RUN npm install && \
    npm run build

# Frontend
FROM nginx:1.21.6-alpine AS frontend

USER nginx

WORKDIR /usr/share/nginx/html
COPY --from=builder /srv/build .
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
