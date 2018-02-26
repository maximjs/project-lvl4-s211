import gon from 'gon'; // eslint-disable-line
import React from 'react';
import ReactDom from 'react-dom';
// import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducer from './reducers';

const initState = { channels: { ...gon.channels } };
const store = createStore(
  reducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// eslint-disable-line
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);
