# Use an official Node.js runtime as a parent image
FROM node:14.18.0

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install application dependencies
RUN npm install

# Set the default command
CMD ["npm", "start"]
