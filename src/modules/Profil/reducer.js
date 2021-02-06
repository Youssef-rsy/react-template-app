
import types from './ActionTypes';


const initialState = {
    user: {}
}

function reducer(state = initialeState, action) {

    switch (action.type) {
        case types.PROFIL_FULFIELLD: {
            return {
                ...state,
            };
        }
        case types.UPDATE_PASSWORD_FULFIELLD: {
            const newPassword = action.payload.password;
            return {
                ...state,
                user: { ...this.state.user, password: newPassword }
            };
        }
        default:
            return state;
    }

};

export default reducer;