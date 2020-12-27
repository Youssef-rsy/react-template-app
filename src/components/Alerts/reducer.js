/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import types from './ActionTypes';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const initialState = {
    show: false,
    entity: ''
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
        case types.SHOW_ALERT: {
            console.log('in alert reducer');
            return {
                ...state,
                show: true,
            }
        }
        case types.HIDE_ALERT: {
            console.log('in alert reducer');
            return {
                ...state,
                show: false,
            }
        }
        default:
            return state;
    }
}
