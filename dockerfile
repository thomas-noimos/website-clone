FROM node:20.12.2-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM base AS builder
WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN CI=true npm run build 

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 80

ENV PORT=80

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]