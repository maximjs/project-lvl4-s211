import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import gon from 'gon'; // eslint-disable-line
import _ from 'lodash';
import * as actions from '../actions';

const initStateChannels = _.keyBy(gon.channels, 'id');

const newMessageText = handleActions({
  [actions.updateInputForm](state, { payload: { text } }) {
    return text;
  },
  [actions.updateMessageSuccess]() {
    return '';
  },
}, '');

const messages = handleActions({
  [actions.addMessage](state, { payload: { data: { attributes } } }) {
    return [...state, attributes];
  },
}, gon.messages);

const channels = handleActions({
  [actions.addChannels](state) {
    return state;
  },
}, initStateChannels);

const currentChannelId = handleActions({
  [actions.changeCurrentChannel](state, { payload: channelId }) {
    return channelId;
  },
}, gon.currentChannelId);

export default combineReducers({
  newMessageText,
  messages,
  channels,
  currentChannelId,
});
