FROM node:18-alpine
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
COPY --chown=app:app package*.json ./
RUN npm ci --only=production
COPY --chown=app:app . .
USER app
EXPOSE 4000
CMD ["node", "server.js"]
