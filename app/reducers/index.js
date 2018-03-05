import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const messageCreatingState = handleActions({
  [actions.updateMessageRequest]() {
    return 'requested';
  },
  [actions.updateMessageSuccess]() {
    return 'successed';
  },
  [actions.updateMessageFailure]() {
    return 'failed';
  },
}, 'none');

const сhannelCreatingState = handleActions({
  [actions.updateChannelRequest]() {
    return 'requested';
  },
  [actions.updateChannelSuccess]() {
    return 'successed';
  },
  [actions.updateChannelFailure]() {
    return 'failed';
  },
}, 'none');

const messages = handleActions({
  [actions.initState](state, { payload: gon }) {
    return gon.messages;
  },
  [actions.addMessage](state, { payload: { data: { attributes } } }) {
    return [...state, attributes];
  },
}, []);

const channels = handleActions({
  [actions.initState](state, { payload: gon }) {
    return gon.channels;
  },
  [actions.addChannel](state, { payload: { data: { attributes } } }) {
    return [...state, attributes];
  },
}, []);

const currentChannelId = handleActions({
  [actions.initState](state, { payload: gon }) {
    return gon.currentChannelId;
  },
  [actions.changeCurrentChannel](state, { payload: { channelId } }) {
    return channelId;
  },
}, null);

export default combineReducers({
  messageCreatingState,
  сhannelCreatingState,
  form: formReducer,
  messages,
  channels,
  currentChannelId,
});
