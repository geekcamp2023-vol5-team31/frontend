ARG NODE_VERSION=18-slim

# Build phase
FROM node:$NODE_VERSION AS builder
WORKDIR /app

# Prepare node_modules
COPY ./ ./
RUN npm -g install pnpm
RUN pnpm i --frozen-lockfile


# Run phase
FROM node:$NODE_VERSION AS runner

LABEL org.opencontainers.image.source=https://github.com/geekcamp2023-vol5-team31/frontend
WORKDIR /app

COPY --from=builder /app ./

# Copy artifacts
CMD ["./start.sh"]