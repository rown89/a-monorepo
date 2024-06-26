# Base stage with Node.js and necessary dependencies
FROM node:18-alpine AS base

# Install libc6-compat and update in a single layer to reduce image size
RUN apk add --no-cache libc6-compat && apk update

# Builder stage
FROM base AS builder
WORKDIR /app
RUN npm -g i turbo
COPY . .
RUN turbo prune @nomadgem/backoffice-website --docker

# Verify the output of turbo prune
RUN ls -la /app/out


# Installer stage to handle dependencies
FROM base AS installer
WORKDIR /app

# Copy common config files first to leverage Docker cache
COPY tsconfig.json ./
COPY .gitignore .gitignore

# Copy necessary files from builder and install dependencies
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json

RUN npm install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build:next --filter=@nomadgem/backoffice-website

# Runner stage for production
FROM base AS runner
WORKDIR /app

# Create non-root user and set permissions
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

# Copy necessary configuration and packages for running the app
COPY --from=installer /app/apps/backoffice/website/next.config.mjs ./apps/backoffice/website/
COPY --from=installer /app/apps/backoffice/website/package.json ./apps/backoffice/website/
COPY --from=installer --chown=nextjs:nodejs /app/apps/backoffice/website/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/backoffice/website/.next/static ./apps/backoffice/website/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/backoffice/website/public ./apps/backoffice/website/public

# Copy common packages
COPY --from=installer --chown=nextjs:nodejs /app/packages/ui ./packages/ui
COPY --from=installer --chown=nextjs:nodejs /app/packages/website ./packages/website
COPY --from=installer --chown=nextjs:nodejs /app/packages/infrastructure ./packages/infrastructure

# Copy common config files
COPY --from=installer --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json

# Expose port and set the command
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME 0.0.0.0

CMD ["node", "apps/backoffice/website/server.js"]
