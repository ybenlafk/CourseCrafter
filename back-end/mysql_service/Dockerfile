# Use the official MySQL image as the base image
FROM mysql:latest

# Copy the initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Set environment variables for MySQL
ENV MYSQL_DATABASE tchipa
ENV MYSQL_USER ybenlafk
ENV MYSQL_PASSWORD ybenlafk123
ENV MYSQL_ROOT_PASSWORD 1234

# Expose the MySQL port
EXPOSE 3306

CMD ["mysqld"]
