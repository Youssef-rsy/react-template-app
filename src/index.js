import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';

import './utilities/fonts/fonts.js';

import store from './store';
import './common/i18next';
import './index.scss';
import App from './features/App';
import './utilities/font-awsome/font-awsome';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);
