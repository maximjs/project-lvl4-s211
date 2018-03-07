import React from 'react';
import ReactDom from 'react-dom';
import io from 'socket.io-client';// eslint-disable-line
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gon from 'gon'; // eslint-disable-line
import App from './containers/App';
import reducers from './reducers';
import { addMessage, addChannel, removeChannel, renameChannel, initState } from './actions';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);

store.dispatch(initState(gon));

const socket = io();
socket
  .on('connect', () => console.log('connected to server'))
  .on('disconnect', () => console.log('disconnected from server'))
  .on('newMessage', (data) => {
    store.dispatch(addMessage(data));
  })
  .on('newChannel', (data) => {
    store.dispatch(addChannel(data));
  })
  .on('removeChannel', (data) => {
    store.dispatch(removeChannel(data));
  })
  .on('renameChannel', (data) => {
    store.dispatch(renameChannel(data));
  });

export default userName => ReactDom.render(
  <Provider store={store}>
    <App userName={userName} />
  </Provider>,
  document.getElementById('chat'),
);
