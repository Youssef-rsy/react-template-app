import axios from 'axios';
import constant from '../constants/constants';

var config = {
  method: 'get',
  url: 'https://api.covid19api.com/',
  headers: {},
};

export default {
  covid: {},
};
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
