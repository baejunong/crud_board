import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `http://${window.location.host}`
      : 'localhost:3000',
});

export default instance;
