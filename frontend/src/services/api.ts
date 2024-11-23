import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Cambia el puerto si es necesario
  timeout: 5000, // Tiempo máximo de espera en milisegundos
});

export default api;
