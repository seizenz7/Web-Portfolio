# =============================================================================
# Stage 1: Builder
# Install dependencies & build the production static assets
# =============================================================================
FROM node:20-alpine AS builder

# Install only what's needed for build
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy dependency manifests first (layer cache optimization)
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies needed for build)
RUN npm ci --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Run production build — outputs to /app/dist
RUN npm run build

# =============================================================================
# Stage 2: Production runner
# Serve the static build with nginx — minimal, hardened image
# =============================================================================
FROM nginx:1.27-alpine AS production

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/app.conf

# Copy built static assets from builder stage
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Configure permissions for necessary directories so Nginx can run entirely as non-root
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Switch to the non-root 'nginx' user
USER nginx

# Expose application port
EXPOSE 8010

# Health check — confirms nginx is serving content
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:8010/healthz || exit 1

# Run nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
