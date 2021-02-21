FROM mhart/alpine-node:12 AS builder
LABEL Babacar Seenghor<senghor.pape912@gmail.com>
WORKDIR /app
COPY ./ .
RUN yarn 
RUN yarn run build

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.templates
CMD /bin/bash -c "envsubst '$${API_LOCATION},$${UI_LOCATION}' < /etc/nginx/conf.templates/default.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

COPY --from=builder /app/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'