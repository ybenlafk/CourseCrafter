# Use an official Node.js image as the base image
FROM node:20.6.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npx prisma generate

COPY ./script.sh ./

RUN chmod +x ./script.sh
# Expose the port on which Nest.js will run
EXPOSE 8080

# Start the Nest.js app
CMD ["./script.sh"]
