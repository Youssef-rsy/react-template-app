
const AlertMiddleware = storeAPI => next => action => {
    // Do something in here, when each action is dispatched
    const { dispatch } = storeAPI;
    if ((action.type.includes('CREATE') || action.type.includes('UPDATE')) && action.type.includes('FULFILLED')) {
        dispatch({ type: 'SHOW_ALERT', payload: action.type.split('_')[1].toLowerCase() })
    }
    return next(action);
}
export default AlertMiddleware;