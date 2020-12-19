import { ActionType } from 'redux-promise-middleware';
console.log(ActionType);
export default {
  GET_USERS: 'GET_USERS',
  GET_USERS_PENDING: `GET_USERS_${ActionType.Pending}`,
  GET_USERS_FULFILLED: `GET_USERS_${ActionType.Fulfilled}`,
  GET_USERS_REJECTED: `GET_USERS_${ActionType.Rejected}`,
  FIND_USER: 'FIND_USER',
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
};
