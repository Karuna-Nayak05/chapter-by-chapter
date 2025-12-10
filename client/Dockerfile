# --- Stage 1: The Builder ---
# We use Node to build the React app
FROM node:18-alpine as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the app (creates the 'build' folder)
COPY . .
RUN npm run build

# --- Stage 2: The Server (Nginx) ---
# We use a tiny Nginx server to serve the static files
FROM nginx:alpine

# Copy ONLY the build folder from Stage 1 (Discards node_modules!)
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (Standard web port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]