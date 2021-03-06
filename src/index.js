import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import counterApp from './reducers';

const store = createStore(counterApp)
const appElement = document.getElementById('app');

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  appElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
