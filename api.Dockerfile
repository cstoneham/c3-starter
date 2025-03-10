# Use the official Bun image
FROM oven/bun:1 as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY api/package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY api/ ./

# Build the binary
RUN bun build ./index.ts --compile --outfile server

# Production image
FROM debian:bullseye-slim

# Install necessary SSL certificates
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only the binary from builder
COPY --from=builder /app/server ./server

# Expose the port your app runs on
EXPOSE 3000

# Run the binary
CMD ["./server"]