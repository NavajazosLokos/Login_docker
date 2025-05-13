# Usa una imagen base de Node.js
FROM node:18

# Crea el directorio de la app en la imagen
WORKDIR /app

# Copia los archivos de dependencia
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto que usará el servidor
EXPOSE 3000

# Comando para correr la app
CMD ["npm", "start"]