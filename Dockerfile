FROM node:22alphine

# Instalar dependencias del sistema para Jimp (alhpine require esto)
RUN apk add -no-cache libc6-compat

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm","start"]