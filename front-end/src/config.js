import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://travelmap-mern-3009.herokuapp.com/',
});
