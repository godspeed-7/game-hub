import axios, { CanceledError } from 'axios';

const api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0380b720f7c34ffb9673aa3bb4d21268'
    }
})
export { CanceledError };

export default api;