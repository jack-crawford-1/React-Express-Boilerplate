FROM node:20.10-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build --if-present
RUN npm prune --omit=dev