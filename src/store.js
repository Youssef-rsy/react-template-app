import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import AlertMiddleware from './middlewares/AlertMiddleware'
import reducers from './reducers';
import logger from 'redux-logger';

const composeEnhancers = composeWithDevTools({});
const middleware = [thunk, promise, AlertMiddleware, logger];
console.log(process);
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
