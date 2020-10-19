FROM nginx
RUN mkdir /etc/nginx/html
COPY ./build/ /etc/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
