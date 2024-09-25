// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://us1.locationiq.com/v1', // URL base para LocationIQ
});

export const getGeocode = (address) => {
    const apiKey = 'pk.eceeb20f38a19f4b73f237828971e230'; // Api Password
    return api.get(`/search.php?key=${apiKey}&q=${address}&format=json`);
};

export const getDirections = (start, end) => {
    const apiKey = 'pk.eceeb20f38a19f4b73f237828971e230'; // Api Password
    return api.get(`/directions/driving/${start};${end}?key=${apiKey}&format=json`);
};


const api_b = axios.create({
    baseURL: 'https://ecodrive-production.up.railway.app/api', // Asegúrate de que esta sea la ruta correcta
});

export default api;