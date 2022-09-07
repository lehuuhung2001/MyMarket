import axios from "axios";

const API_ENDPOINT = "https://sever-my-market.herokuapp.com/api";

function getToken() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user")
  return token ? `Bearer ${token}` : user;
}

const api = axios.create({
  baseURL: API_ENDPOINT,
});

// api.interceptors.request.use((config) => {
//   config.headers.authorization = getToken();
// });

api.interceptors.request.use(
  function (config) {
   config.headers.authorization = getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
