import axios from 'axios';
import constant from '../constants/constants';

//here is where we are defining our custom axios instance.
//if all of your API routes come from the same location, or you are using a web proxy to hit the server, you can provide a base url
//you can also attach axios interceptors to custom axios instances as well
const userApiClient = axios.create({
  baseURL: constant.userApi,
  //timeout: 1000,
});

export default {
  user: {
    createUser(payload) {
      return userApiClient.post('/create ', payload);
    },
    gellAllUser(perPage, page) {
      return userApiClient.get('/list', {
        params: {
          limit: perPage,
          page,
        },
      });
    },
    findUserByCriteria(perPage, page, criteria) {
      console.dir(criteria);
      return userApiClient.get('/list', {
        params: {
          limit: perPage,
          page,
          ...criteria,
        },
      });
    },
    getUserById(userId) {
      return userApiClient.get(`/${userId}`);
    },
    updateUser(user) {
      return userApiClient.put('/create ', { user });
    },
    deleteUserById(userId) {
      return userApiClient.delete(`/${userId}`);
    },
  },
};
