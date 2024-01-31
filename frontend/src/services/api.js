import axios from 'axios';

// Set up Axios for API calls to your backend and Hashnode
const api = axios.create({
  baseURL: 'http://localhost:5000', // Change this based on your backend URL
});

export default api;
