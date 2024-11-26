FOOD OPS

Backend

Conectado a una base de datos MongoDB, codeado con Express.js
Pre-requisitos
Tener instalado Node.js (version 16 por lo menos)
Tener instalado npm
Tener una base de datos MongoDB en funcionamiento

Configuracion

Clonar el repositorio
   > git clone https://github.com/nicanovotny/FoodOps.git
   > cd backend

Instalar dependencias

> npm install

Configurar las variables de entorno

En el archivo .env, actualizar la URL para conectarse a la base de datos MongoDB deseada


Ejecución del proyecto
Construir el proyecto
   > npm run build


Ejecutar el servidor en modo producción
   > npm start


Testing

Este proyecto utiliza Jest para las pruebas. No es necesario configurar una base de datos MongoDB local, ya que las pruebas se ejecutan con una base de datos en memoria proporcionada por MongoDB Memory Server. Esta base de datos se crea y elimina automáticamente durante la ejecución de las pruebas.
Desde el backend, ejecutar:
> npm test


Frontend

Desarrollado usando React en TypeScript

> cd frontend


/////////// variable de entorno

Ejecución del proyecto
Construir el proyecto

   > npm run build
Ejecutar el proyecto
   > npm start
