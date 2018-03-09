import React from 'react';
import Channels from './Channels.jsx'; // eslint-disable-line
import AddMessageForm from './AddMessageForm.jsx'; // eslint-disable-line
import Messages from '../containers/Messages';
import AddChannelForm from './AddChannelForm.jsx'; // eslint-disable-line

const Main = props =>
  (
    <div className="row">
      <div className="col-md-3">
        <h4>Channels:</h4>
        <AddChannelForm
          сhannelCreatingState={props.сhannelCreatingState}
          updateChannels={props.updateChannels}
        />
        <br />
        <Channels
          currentChannelId={props.currentChannelId}
          channels={props.channels}
          changeCurrentChannel={props.changeCurrentChannel}
          requestRemoveChannel={props.requestRemoveChannel}
          requestRenameChannel={props.requestRenameChannel}
        />
      </div>
      <div className="col-md-9">
        <div className="jumbotron">
          <Messages />
        </div>
        <p>Your name: {props.userName}</p>
        <AddMessageForm
          userName={props.userName}
          currentChannelId={props.currentChannelId}
          messageCreatingState={props.messageCreatingState}
          updateMessage={props.updateMessage}
        />
      </div>
    </div>
  );

export default Main;
