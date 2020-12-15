FROM nginx
RUN mkdir -p /etc/nginx/html /etc/nginx/html/b/login
COPY ./build/ /etc/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./MP_verify_uxdNmWDkvn2GWZkl.txt /etc/nginx/html/
COPY ./MP_verify_uxdNmWDkvn2GWZkl.txt /etc/nginx/html/b/login/
