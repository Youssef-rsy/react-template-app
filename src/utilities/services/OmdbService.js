import axios from 'axios';
import constant from '../constants/constants';

//here is where we are defining our custom axios instance.
//if all of your API routes come from the same location, or you are using a web proxy to hit the server, you can provide a base url
//you can also attach axios interceptors to custom axios instances as well
const omdbApiClient = axios.create({
  baseURL: constant.omdbapi,
  timeout: 1000,
  params: {
    apikey: constant.apikey,
  },
});

export default {
  omdb: {
    search(payload) {},
  },
  auth: {
    userLogin(payload) {
      return apiClient.post('/auth/login/', payload);
    },
    userAliveAndActive() {
      return apiClient.post('/auth/check/');
    },
    userLogout() {
      return apiClient.post('/auth/logout/');
    },
    generateResetToken(payload) {
      return apiClient.post('/auth/generate_reset_token/', payload);
    },
    resetPassword(payload) {
      return apiClient.post('/auth/reset_password/', payload);
    },
  },
};
