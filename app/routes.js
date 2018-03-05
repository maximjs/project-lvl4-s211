const api = '/api/v1';

export default {
  postChannel: () => [api, 'channels'].join('/'),
  postMessage: channelId => [api, 'channels', `${channelId}`, 'messages'].join('/'),
};
