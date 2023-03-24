import axios from "axios";

const request = axios.create();

request.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
request.defaults.headers.get.Accept = "application/json";
request.defaults.headers.common["Content-Type"] = "application/json";

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 401:
        console.log("Unauthorized");
        break;
      case 400:
        console.log("Bad Request");
        break;
      case 500:
        console.log("Server Error");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default request;
