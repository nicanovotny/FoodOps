
# Food Ops

**Food Ops** es una aplicación de gestión para restaurantes, productos y pedidos, desarrollada con Node.js, Express.js, React y MongoDB.

## Pre-requisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes de Node.js)
- **MongoDB** en funcionamiento (local o en la nube)

## Clonar el Repositorio

Para clonar el repositorio, usa el siguiente comando:

```bash
git clone https://github.com/nicanovotny/FoodOps.git
```

## Backend
El backend está construido con Express.js y se conecta a una base de datos MongoDB.

### Pasos para el Backend

- Navega a la carpeta backend:

```bash
cd backend
```
- Instala las dependencias:

```bash
npm install
```
- Configura las variables de entorno:

Crea o edita el archivo .env y actualiza la URL de la base de datos MongoDB a la que deseas conectarte.

- Construye el proyecto:

```bash
npm run build
```
- Ejecuta el servidor en modo producción:

```bash
npm start
```
### Testing
Este proyecto utiliza Jest para realizar pruebas. No es necesario tener una base de datos MongoDB local, ya que se usa una base de datos en memoria proporcionada por MongoDB Memory Server, que se crea y elimina automáticamente durante las pruebas.
- Para ejecutar las pruebas:

```bash
npm test
```
## Frontend
El frontend está desarrollado con React y TypeScript.
### Pasos para el Frontend
- Navega a la carpeta frontend:
```bash
cd frontend
```
- Crea un archivo .env en la carpeta frontend y agrega la siguiente configuración:
```bash
REACT_APP_API_URL=<insertar URL del backend>
```
Asegúrate de reemplazar <insertar URL del backend> con la URL donde está corriendo el backend.
### Ejecución del Frontend
- Instala las dependencias:

```bash
npm install
```
- Construye el proyecto:

```bash
npm run build
```
- Ejecuta el proyecto:

```bash
npm start
```