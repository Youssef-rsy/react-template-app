import React from 'react';
import { combineReducers } from 'redux';

import appReducers from './pages/reducers';

const reducers = combineReducers({
  appReducers,
});

export default reducers;
