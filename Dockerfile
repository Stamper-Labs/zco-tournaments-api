# Use lightweight Node.js image
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Enable Corepack and prepare Yarn
RUN corepack enable && corepack prepare yarn@1.22.22 --activate

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy pre-built app and minimal config
COPY dist ./dist
COPY nest-cli.json ./

EXPOSE 3000

# Run the app with Yarn
CMD ["yarn", "start:prod"]