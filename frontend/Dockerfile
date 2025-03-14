# Step 1: Use a node base image
FROM node:16-alpine as build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build your app
RUN npm run build

# Step 7: Use nginx to serve the app
FROM nginx:stable-alpine

# Remove default Nginx config (optional, but recommended)
RUN rm -f /etc/nginx/nginx.conf

# Copy custom Nginx configuration into the container
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose port 80 to the outer world
EXPOSE 80

# Step 9: Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
