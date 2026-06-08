# =============================================================================
# Stage 1: Builder
# Install dependencies & build 
# =============================================================================
FROM node:20-alpine AS builder

# Install hanya yang dibutuhkan untuk build
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy dependency manifests dulu (optimasi layer cache)
COPY package.json package-lock.json ./

# Install ALL dependencies (termasuk devDependencies yang dibutuhkan untuk build)
RUN npm ci --frozen-lockfile

# Copy seluruh source code
COPY . .

# Jalankan build produksi — menghasilkan output di /app/dist
RUN npm run build

# =============================================================================
# Stage 2: Production runner
# Menjalankan hasil build dengan nginx minimal
# =============================================================================
FROM nginx:1.27-alpine AS production

# Hapus default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/app.conf

# Copy built static assets from builder stage
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Konfigurasi permission untuk directory yang dibutuhkan agar Nginx dapat berjalan sepenuhnya sebagai non-root
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Gunakan user 'nginx'
USER nginx

# Expose port aplikasi
EXPOSE 8080

# Health check untuk memastikan nginx berjalan dengan baik
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:8080/healthz || exit 1

# Jalankan nginx di foreground
CMD ["nginx", "-g", "daemon off;"]
