# Build image
FROM node:16-alpine AS build

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY ./*.json .
COPY ./src ./src
RUN npm i && \ 
    npm run build

# Result image
FROM node:16-alpine

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY --from=build ${APP_DIR}/build ./build
COPY --from=build ${APP_DIR}/node_modules ./node_modules
COPY --from=build ${APP_DIR}/package.json .

CMD npm run start