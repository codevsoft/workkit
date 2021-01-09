# base builder stage
FROM node:12-stretch as base-builder
WORKDIR /app
COPY package*.json ./
COPY . .

# build stage for development
FROM base-builder as development-builder
RUN yarn install --also=dev

# development stage
FROM development-builder as development
EXPOSE 4200
