# https://turbo.build/repo/docs/guides/tools/docker#example
FROM node:22.5.1-alpine3.19 AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app

# Install pnpm with corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Enable `pnpm add --global` on Alpine Linux by setting
# home location environment variable to a location already in $PATH
# https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
ENV PNPM_HOME=/usr/local/bin

RUN pnpm add --global turbo@^2.0.9

COPY . .
 
# Generate a partial monorepo with a pruned lockfile for a target workspace.
# Pass --build-arg APP_NAME=XXX to override this
ARG APP_NAME="XXX"
RUN turbo prune ${APP_NAME} --docker
 
# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
 
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable pnpm && pnpm install --frozen-lockfile
 
# Build the project
COPY --from=builder /app/out/full/ .

ARG APP_NAME="XXX"
RUN pnpm turbo run build --filter ${APP_NAME}
 
FROM base AS runner
WORKDIR /app
 
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

ARG APP_NAME="XXX"
COPY --from=installer /app/apps/${APP_NAME}/next.config* .
COPY --from=installer /app/apps/${APP_NAME}/package.json .
 
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

ARG APP_NAME="XXX"
ENV APP_NAME=${APP_NAME}
ENV PORT=3000

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node apps/${APP_NAME}/server.js