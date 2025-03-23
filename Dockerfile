# https://turbo.build/repo/docs/guides/tools/docker#example
FROM node:22.9.0-bookworm AS base
# https://github.com/pnpm/pnpm/issues/9029
# https://github.com/nodejs/corepack/issues/612
RUN npm install -g corepack@latest
# Install pnpm with corepack
RUN corepack enable
RUN corepack prepare pnpm --activate

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apt update
WORKDIR /app
 
# First install the dependencies (as they change less often)
COPY . .
RUN pnpm install --frozen-lockfile

# Build the project
RUN npm run build

FROM base AS runner

ARG APP_NAME=dashboard
ARG PORT=3000

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/${APP_NAME}/next.config* .
COPY --from=installer /app/apps/${APP_NAME}/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

ENV APP_NAME=${APP_NAME}
EXPOSE ${PORT}

CMD node apps/${APP_NAME}/server.js
