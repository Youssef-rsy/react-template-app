/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import types from './ActionTypes';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const initialState = {
  users: [],
  user: {},
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
    case types.GET_USERS_FULFILLED: {
      return {
        ...state,
        users: action.payload.data.data.users,
      };
    }
    case types.FIND_USER: {
      console.log('reducer : ', types.FIND_USER);
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
}
