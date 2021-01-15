import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-v4-rtl/dist/js/bootstrap.min.js';

import './utilities/fonts/fonts.js';

import store from './store';
import './common/i18next';
import './index.scss';
import App from './features/App';
import './utilities/font-awsome/font-awsome';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.js';
import Login from './features/Login/Login.js';
import NotFound from './components/404/NotFound.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <Switch>
            <Route path={["/app", "/app/"]} component={App} />
            <Route exact path={["/", "/logout"]} component={Login} />
            <Route exact path={"/404"} component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
