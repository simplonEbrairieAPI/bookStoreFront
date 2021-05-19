import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseUrl: 'http://localhost:3011/'
})

// instance.get('http:localhost:4000')

export default instance