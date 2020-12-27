import React from 'react';
import { combineReducers } from 'redux';
import alert from './Alerts/reducer';

const reducers = combineReducers({
  alert,
});

export default reducers;
