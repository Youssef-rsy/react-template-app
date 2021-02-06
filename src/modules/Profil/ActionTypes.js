import { ActionType } from 'redux-promise-middleware';

export default {
    PROFIL: 'PROFIL',
    PROFIL_PENDING: `PROFIL_${ActionType.Pending}`,
    PROFIL_FULFIELLD: `PROFIL_${ActionType.Fulfilled}`,
    PROFIL_REJECTED: `PROFIL_${ActionType.Rejected}`,
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_PASSWORD_PENDING: `UPDATE_PASSWORD_${ActionType.Pending}`,
    UPDATE_PASSWORD_FULFIELLD: `UPDATE_PASSWORD_${ActionType.Fulfilled}`,
    UPDATE_PASSWORD_REJECTED: `UPDATE_PASSWORD_${ActionType.Rejected}`,
};