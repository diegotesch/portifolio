# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12.14-alpine as build

ENV HOME=/usr/local/app

# Set the working directory
WORKDIR ${HOME}

# Add the source code to app
COPY ./package.json $HOME

COPY ./package-lock.json $HOME

# Install all the dependencies
RUN npm install

COPY . $HOME

# Generate the build of the application
RUN npm run build:prod

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
