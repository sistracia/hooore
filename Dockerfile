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
COPY .gitignore .gitignore
COPY hooore-components ./hooore-components
COPY hooore-packages ./hooore-packages
COPY package.json .
COPY pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile

# Build the project
COPY . .

RUN pnpm run build
 
FROM base AS runner
WORKDIR /app
 
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/next.config* .
COPY --from=installer /app/package.json .
 
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=installer --chown=nextjs:nodejs /app/public ./public

ARG PORT=3000
EXPOSE ${PORT}

CMD node server.js
