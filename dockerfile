FROM nginx

LABEL app="front-mongo"

COPY . /usr/share/nginx/html

EXPOSE 80