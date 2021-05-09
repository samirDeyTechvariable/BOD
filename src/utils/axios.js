import axios from 'axios';

const axiosBaseUrl = process.env.REACT_APP_AXIOS_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: axiosBaseUrl,
  timeout: 20000,
  withCredentials: false, // set it to true for cookies
});

export default AxiosInstance;
