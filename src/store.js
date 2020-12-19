import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, promise, logger];
console.log(process);
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
