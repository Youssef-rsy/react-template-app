import types from './ActionTypes';
import userApi from './../../../utilities/services/UserApi';


export function createUser(user) {
  return {
    type: types.CREATE_USER,
    payload: userApi.user.createUser(user),
  };
}

export const getAllUsers = (perPage, page) => ({
  type: types.GET_USERS,
  payload: userApi.user.gellAllUser(perPage, page),
});
export const getUser = userId => ({
  type: types.FIND_USER,
  payload: userApi.user.getUserById(userId),
});

export const searchForUsers = criteria => ({
  type: types.FIND_USERS,
  payload: userApi.user.findUserByCriteria(10, 1, criteria),
});

export const updateUser = user => ({
  type: types.UPDATE_USER,
  payload: userApi.user.updateUser(user),
});

export const deleteUser = userId => ({
  type: types.DELETE_USER,
  payload: userApi.user.deleteUserById(userId),
});
