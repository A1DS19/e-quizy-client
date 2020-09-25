import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//css imports
import './assets/css/bootstrap.min.css';
import './assets/scss/paper-kit.scss?v=1.2.0';
import './assets/demo/demo.css?v=1.2.0';

import App from './components/App';
import reducers from './reducers';

//config
const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
