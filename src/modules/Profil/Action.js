import types from './ActionTypes';

const changeUserpassword = (userId, newPassword) => ({
    type: types.UPDATE_PASSWORD,
    payload: {}
});
const userProfil = (userId, newPassword) => ({
    type: types.PROFIL,
    payload: {}
});

export default {
    changeUserpassword,
    userProfil
};