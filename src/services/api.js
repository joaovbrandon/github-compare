import axios from 'axios';

const api = {};

api.gitHub = axios.create({
  baseURL: 'https://api.github.com/',
});

export default api;
