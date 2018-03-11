import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
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
  [actions.initMessagesState](state, { payload: messagesState }) {
    return _.keyBy(messagesState, 'id');
  },
  [actions.addMessage](state, { payload: { data: { attributes } } }) {
    return { ...state, [attributes.id]: attributes };
  },
  [actions.removeChannel](state, { payload: { data: { id } } }) {
    return _.omit(state, id);
  },
}, {});

const channels = handleActions({
  [actions.initChannelsState](state, { payload: channelsState }) {
    return _.keyBy(channelsState, 'id');
  },
  [actions.addChannel](state, { payload: { data: { attributes } } }) {
    return { ...state, [attributes.id]: attributes };
  },
  [actions.removeChannel](state, { payload: { data: { id } } }) {
    return _.omit(state, id);
  },
  [actions.renameChannel](state, { payload: { data } }) {
    const updatedChannel = { ...state[data.id], name: data.attributes.name };
    return { ...state, [data.id]: updatedChannel };
  },
}, {});

const currentChannelId = handleActions({
  [actions.initCurrentChannelState](state, { payload: channelId }) {
    return channelId;
  },
  [actions.changeCurrentChannel](state, { payload: { channelId } }) {
    return channelId;
  },
  [actions.removeChannel]() {
    return 1;
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
