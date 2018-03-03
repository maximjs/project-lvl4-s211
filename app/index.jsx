import React from 'react';
import ReactDom from 'react-dom';
import io from 'socket.io-client';// eslint-disable-line
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import reducers from './reducers';
import { addMessage } from './actions';

const reactDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();// eslint-disable-line

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reactDevtools,
  ),
);

const socket = io();
socket.on('connect', () => console.log('connected to server'));
socket.on('newMessage', (data) => {
  console.log('newMessage', data);
  store.dispatch(addMessage(data));
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);
