FROM oven/bun:1 as builder

WORKDIR /app

# Copy root workspace files
COPY package.json .
COPY bun.lock .
COPY tsconfig.json .

# Copy UI and API packages
COPY ui/ ./ui/
COPY api/ ./api/
COPY shared/ ./shared/

# Install dependencies
RUN bun install --frozen-lockfile

# Build the UI application
RUN bun run build:ui

# Production stage
FROM nginx:alpine

# Copy the built assets from builder stage
COPY --from=builder /app/ui/dist /usr/share/nginx/html

# Copy our custom nginx configuration
COPY ui/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3001 instead of 80
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
