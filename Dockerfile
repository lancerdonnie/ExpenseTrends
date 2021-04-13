FROM node:current-alpine as build-step
WORKDIR /app
COPY frontend/package*.json ./
COPY ./frontend ./
RUN npm run build

FROM node:current-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN rm /frontend
RUN npm run build
COPY --from=build-step /app /frontend
ENV TZ=Africa/Lagos
ENV PORT=$PORT
ENV MYSQL_PASSWORD=$MYSQL_PASSWORD
ENV MYSQL_USERNAME=$MYSQL_USERNAME
ENV MYSQL_HOST=$MYSQL_HOST
ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENTRYPOINT ["npm","start"]