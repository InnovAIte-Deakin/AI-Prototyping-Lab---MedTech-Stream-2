# Build and run a production Next.js image
FROM node:20-alpine AS base
WORKDIR /app

# Build args for injecting public env at build time
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}

# Install dependencies first for better caching
COPY package.json package-lock.json* .npmrc* ./
RUN npm install --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

EXPOSE 3000
ENV NODE_ENV=production

# Run as non-root
USER node

CMD ["npm", "run", "start"]
