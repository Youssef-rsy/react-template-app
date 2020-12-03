/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
//import * as types from './types';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const initialState = {
  reduxUp: false,
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
    case 'REDUX_FULFILLED': {
      return {
        ...state,
        reduxUp: action.payload.body(false).reduxUp,
      };
    }
    default:
      return state;
  }
}
