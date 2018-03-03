import { createAction } from 'redux-actions';
import axios from 'axios';

export const addMessage = createAction('MESSAGE_ADD');
export const updateInputForm = createAction('INPUTFORM_UPDATE');

export const updateMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

// export const addChannels = createAction('ADD_CHANNELS');
// export const changeCurrentChannel = createAction('CHANGE_CHANNEL');

export const updateMessage = (channelId, message) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/channels/${channelId}/messages`, { data: { attributes: message } });
    dispatch(updateMessageSuccess());
  } catch (e) {
    console.log(e);
  }
};
