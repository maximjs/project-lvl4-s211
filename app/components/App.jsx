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
        <Channels
          currentChannelId={props.currentChannelId}
          channels={props.channels}
          changeCurrentChannel={props.changeCurrentChannel}
        />
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md jumbotron">
            <Messages />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <AddMessageForm
              userName={props.userName}
              currentChannelId={props.currentChannelId}
              messageCreatingState={props.messageCreatingState}
              updateMessage={props.updateMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );

export default Main;
