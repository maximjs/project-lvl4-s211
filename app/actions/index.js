import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const initState = createAction('STATE_INITIALIZED');

export const addMessage = createAction('MESSAGE_ADD');

export const updateMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const updateMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const updateMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const updateChannelRequest = createAction('CHANNEL_ADD_REQUEST');
export const updateChannelSuccess = createAction('CHANNEL_ADD_SUCCESS');
export const updateChannelFailure = createAction('CHANNEL_ADD_FAILURE');

export const addChannel = createAction('ADD_CHANNEL');
export const removeChannel = createAction('REMOVE_CHANNEL');
export const renameChannel = createAction('RENAME_CHANNEL');
export const changeCurrentChannel = createAction('CHANGE_CHANNEL');

export const updateMessage = (channelId, message) => async (dispatch) => {
  dispatch(updateMessageRequest());
  try {
    await axios.post(routes.postMessage(channelId), { data: { attributes: message } });
    dispatch(updateMessageSuccess());
  } catch (e) {
    console.log(e);
    dispatch(updateMessageFailure());
  }
};

export const updateChannels = name => async (dispatch) => {
  dispatch(updateChannelRequest());
  try {
    await axios.post(routes.postChannel(), { data: { attributes: name } });
    dispatch(updateChannelSuccess());
  } catch (e) {
    console.log(e);
    dispatch(updateChannelFailure());
  }
};

export const requestRemoveChannel = id => async () => {
  try {
    await axios.delete(routes.changeChannel(id));
  } catch (e) {
    console.log(e);
  }
};

export const requestRenameChannel = (id, name) => async () => {
  try {
    await axios.patch(routes.changeChannel(id), { data: { attributes: name } });
  } catch (e) {
    console.log(e);
  }
};
