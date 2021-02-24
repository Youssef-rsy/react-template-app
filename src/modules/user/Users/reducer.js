/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import types from './ActionTypes';
import includes from 'lodash.includes';
import { lorem } from 'faker';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const initialState = {
  users: [{
    id: 1,
    name: "user 1",
    email: "email1@gmail.com",
    phoneNumber: "0607415263",
    address: "Neque porro quisquam est qui dolorem ipsum quia dolor si",
    company: "Company1"
  }],
  user: {},
  loading: false,
  errors: ''
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default reducer;

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */
function mapUsers(users) {
  const newUsers = users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address.city.concat(' ').concat(user.address.state).concat(',').concat(user.address.country),
    company: user.company.name
  },
  {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address.city.concat(' ').concat(user.address.state).concat(',').concat(user.address.country),
    company: user.company.name
  },
  {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address.city.concat(' ').concat(user.address.state).concat(',').concat(user.address.country),
    company: user.company.name
  },
  {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address.city.concat(' ').concat(user.address.state).concat(',').concat(user.address.country),
    company: user.company.name
  },
  {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address.city.concat(' ').concat(user.address.state).concat(',').concat(user.address.country),
    company: user.company.name
  },
  {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address.city.concat(' ').concat(user.address.state).concat(',').concat(user.address.country),
    company: user.company.name
  }));
  return newUsers;
}
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
        users: mapUsers(action.payload.data.data.users),
        loading: false,
      };
    }
    case types.GET_USERS_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: ''
      };
    }
    case types.GET_USERS_FULFILLED: {
      return {
        ...state,
        users: mapUsers(action.payload.data.data.users),
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
        users: mapUsers(action.payload.data.data.users.filter((user) =>
          includes(user.email, 'gmail')
        )),
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
