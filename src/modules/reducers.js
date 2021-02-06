import React from 'react';
import { combineReducers } from 'redux';
import users from './user/Users/reducer';

const reducers = combineReducers({
  users,
});

export default reducers;
