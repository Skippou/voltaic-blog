FROM node:17-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /
COPY package.json ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM node:17-alpine AS builder
WORKDIR /
COPY . .
COPY --from=dependencies /node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:17-alpine AS runner
WORKDIR /

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /public ./public
COPY --from=builder /.next ./.next
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json ./package.json

USER skippodippo
EXPOSE 3000
CMD ["npm", "start"]