const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: 'https://react-redux-json-server.herokuapp.com',
  });