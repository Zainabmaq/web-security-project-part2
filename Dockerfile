FROM node:18-alpine

# Non-root user banao (security best practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

# Root se appuser pe switch karo
USER appuser

EXPOSE 4000

CMD ["node", "server.js"]
