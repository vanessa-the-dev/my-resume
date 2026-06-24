# Serve the static placeholder with nginx.
# No Node build needed yet — handy since the local Node version is too old to run Vite.
FROM nginx:1.27-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
