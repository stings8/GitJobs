import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jobs.github.com/positions.json',
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json'
  }
});

export default api;