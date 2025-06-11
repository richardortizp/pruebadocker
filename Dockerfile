FROM node:22-alpine

# Instalar dependencias del sistema para Jimp (alpine requiere esto)
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]