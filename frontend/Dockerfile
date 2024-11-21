# Frontend Dockerfile
ARG NODE_VERSION
FROM node:${NODE_VERSION}

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
# COPY . ./
COPY src/ ./src/
COPY public/ ./public/

# Build the React app
RUN npm run build

# Serve the React app
CMD ["npm", "start"]
