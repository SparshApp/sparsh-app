# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the environment variable for React Native bundler
ENV REACT_NATIVE_PACKAGER_HOSTNAME=0.0.0.0

# Expose the default port used by React Native (8081)
EXPOSE 8081

# Start the React Native server
CMD ["npm", "run", "web"]