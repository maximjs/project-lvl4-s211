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
  [actions.removeChannel](state, { payload: { data: { id } } }) {
    return state.filter(m => m.channelId !== id);
  },
}, []);

const channels = handleActions({
  [actions.initState](state, { payload: gon }) {
    return gon.channels;
  },
  [actions.addChannel](state, { payload: { data: { attributes } } }) {
    return [...state, attributes];
  },
  [actions.removeChannel](state, { payload: { data: { id } } }) {
    return state.filter(c => c.id !== id);
  },
  [actions.renameChannel](state, { payload: { data } }) {
    const channelIndex = state.findIndex(item => item.id === data.id);
    const newItem = { ...state[channelIndex], name: data.attributes.name };
    const newState = [...state.slice(0, channelIndex), newItem, ...state.slice(channelIndex + 1)];
    return newState;
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
