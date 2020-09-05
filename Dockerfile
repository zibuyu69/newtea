FROM 36.11.121.52:9180/library/nginx:1.16.0
RUN mkdir /etc/nginx/html
COPY ./build/ /etc/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
