import React from 'react';
import Channels from '../containers/Channels';
import AddMessageForm from './AddMessageForm';
import Messages from '../containers/Messages';
import AddChannelForm from './AddChannelForm';

const App = props =>
  (
    <div className="row">
      <div className="col-md-3">
        <h4>Channels:</h4>
        <AddChannelForm
          сhannelCreatingState={props.сhannelCreatingState}
          updateChannels={props.updateChannels}
        />
        <br />
        <Channels />
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

export default App;
