# Use the official PostgreSQL image
FROM postgres:16-alpine

# Environment variables for database configuration
ENV POSTGRES_DB=rainmaker
ENV POSTGRES_USER=rainmaker
ENV POSTGRES_PASSWORD=rainmaker

# Expose the PostgreSQL port
EXPOSE 5432

# The default command will start PostgreSQL
CMD ["postgres"] 