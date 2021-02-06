import React from 'react';
import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import appReducers from './modules/reducers';
import common from '@components/reducers';

const reducers = combineReducers({
  common,
  appReducers,
  form: formReducer,
});

export default reducers;
