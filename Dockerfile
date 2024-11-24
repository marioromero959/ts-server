# Usar imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias y nodemon globalmente
RUN npm install
RUN npm install -g nodemon ts-node

# Copiar el resto del código (opcional, no necesario si usas volúmenes)
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Usar nodemon para el desarrollo
CMD ["npx", "nodemon", "src/app.ts"]
