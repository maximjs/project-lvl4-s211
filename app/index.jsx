import React from 'react';
import ReactDom from 'react-dom';
import io from 'socket.io-client';// eslint-disable-line
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gon from 'gon'; // eslint-disable-line
import _ from 'lodash';
import App from './containers/App';
import reducers from './reducers';
import * as actions from './actions';

const { messages, channels, currentChannelId } = gon;

const preloadedState = {
  messages: _.keyBy(messages, 'id'),
  channels: _.keyBy(channels, 'id'),
  currentChannelId,
};

const generalChannelId = channels.find(channel => channel.name === 'general').id;

const store = createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);

const socket = io();
socket
  .on('connect', () => console.log('connected to server'))
  .on('disconnect', () => console.log('disconnected from server'))
  .on('newMessage', (data) => {
    store.dispatch(actions.addMessage(data));
  })
  .on('newChannel', (data) => {
    store.dispatch(actions.addChannel(data));
  })
  .on('removeChannel', (data) => {
    const newData = { ...data, generalChannelId };
    store.dispatch(actions.removeChannel(newData));
  })
  .on('renameChannel', (data) => {
    store.dispatch(actions.renameChannel(data));
  });

export default userName => ReactDom.render(
  <Provider store={store}>
    <App userName={userName} />
  </Provider>,
  document.getElementById('chat'),
);
