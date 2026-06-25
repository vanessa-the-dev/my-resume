# ---------- Stage 1: build the React app ----------
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.27-alpine AS production

# SPA-friendly nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static build output from stage 1
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
