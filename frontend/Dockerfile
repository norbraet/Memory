ARG NODE_VERSION
ARG FRONTEND_PORT

FROM node:${NODE_VERSION}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ ./src/
COPY public/ ./public/

EXPOSE ${FRONTEND_PORT}

RUN npm run build

CMD ["npm", "start"]
