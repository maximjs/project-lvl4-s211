const api = '/api/v1';

export default {
  postChannel: () => [api, 'channels'].join('/'),
  changeChannel: channelId => [api, 'channels', `${channelId}`].join('/'),
  postMessage: channelId => [api, 'channels', `${channelId}`, 'messages'].join('/'),
};
