import axios from 'axios';

const BaseURL = "http://localhost:3011/"

const instance = axios.create({
  withCredentials: true,
  baseURL: BaseURL,
})

export default instance;
