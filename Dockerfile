FROM node:24 AS builder

WORKDIR /srv
COPY frontend .

RUN npm install && \
  npm run build

# Frontend
FROM nginx:1.31.5-alpine AS frontend

WORKDIR /usr/share/nginx/html
COPY --from=builder /srv/build .
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
