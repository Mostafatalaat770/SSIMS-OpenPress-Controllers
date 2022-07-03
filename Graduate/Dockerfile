# Stage: build
FROM node:14 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
ARG RUNMODE
ARG REACT_APP_GRADUATE_AGENT_HOST=${GRADUATE_AGENT_HOST:-"localhost"}
ENV REACT_APP_RUNMODE=${RUNMODE} REACT_APP_GRADUATE_AGENT_HOST=${GRADUATE_AGENT_HOST}
RUN npm run build

# Stage: runtime
FROM nginx:alpine as runtime
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build/usr/share/nginx/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]