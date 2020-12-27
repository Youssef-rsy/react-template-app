/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import types from './ActionTypes';
import includes from 'lodash.includes';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const initialState = {
  users: [],
  user: {},
  loading: false,
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default reducer;

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

/**
 * Reducer.
 * @param state
 * @param action
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USER_FULFILLED: {
      console.log('action.payload :', action.payload);
      const users = state.users;
      const user = action.payload.data.data;
      users.push(user);
      return {
        ...state,
        users: users,
      };
    }
    case types.GET_USERS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_USERS_FULFILLED: {
      return {
        ...state,
        users: action.payload.data.data.users,
        loading: false,
      };
    }
    case types.FIND_USERS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.FIND_USERS_FULFILLED: {
      return {
        ...state,
        users: action.payload.data.data.users.filter((user) =>
          includes(user.email, 'gmail')
        ),
        loading: false,
      };
    }
    case types.DELETE_USER_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.DELETE_USER_FULFILLED: {
      const users = state.users;
      users.pop();
      return {
        ...state,
        users: users,
        loading: false,
      };
    }
    case types.FIND_USER_FULFILLED: {
      console.log(action.payload.data.data);
      return {
        ...state,
        user: action.payload.data.data,
      };
    }
    case types.UPDATE_USER_FULFILLED: {
      const users = state.users;
      const user = action.payload.data.data.user;
      user.id = state.users.length + 1;
      users.push(user);
      return {
        ...state,
        users: users,
      };
    }

    default:
      return state;
  }
}
