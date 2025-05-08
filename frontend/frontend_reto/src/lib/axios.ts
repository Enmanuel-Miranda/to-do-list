import axios from 'axios';

// TODO: Investigar cómo poner la ruta en variables de entorno (.env) y usarla aquí
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
});