const URL_PRODUCCION = 'https://mikhuy-anu8.onrender.com';

const esLocal =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_URL = esLocal ? 'http://localhost:8081' : URL_PRODUCCION;