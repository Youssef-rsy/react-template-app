import types from './ActionTypes';
import userApi from './../../../utilities/services/UserApi';

export function findUser(id) {
  console.log('findUser : ', id);
  return {
    type: types.FIND_USER,
    payload: { id: '10', name: 'ysf' },
  };
}

// function getAllUsers() {
//     return function (dispatch) {
//         return dispatch({
//             type: types.GET_USERS,
//             payload: [{ id: "10", name: "ysf" }, { id: "11", name: "rsy" }]
//         });
//     };
// }

export const getAllUsers = (perPage, page) => {
  console.log('in action');
  return {
    type: types.GET_USERS,
    payload: userApi.user.gellAllUser(perPage, page),
  };
};

// export const getAllUsers = () => async dispatch => {
//     const response = [{ id: "10", name: "ysf" }, { id: "11", name: "rsy" }];
//     dispatch({ type: types.GET_USERS, payload: response });
// };
// export const getAllUsers = () => dispatch => {
//     dispatch({ type: types.GET_USERS });
// Api.getUsers()
//     .then(response => response.json())
//     .then(
//         data => dispatch({ type: LOAD_USERS_SUCCESS, data }),
//         error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
//     )
// };
