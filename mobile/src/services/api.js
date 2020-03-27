import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.168.1.10:33331'
});

export default api;