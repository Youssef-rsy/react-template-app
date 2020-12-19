import React from 'react';
import { combineReducers } from 'redux';

import app from './reducer';
import users from './user/Users/reducer';

const reducers = combineReducers({
  app,
  users,
});

export default reducers;
