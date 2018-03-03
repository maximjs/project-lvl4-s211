import React from 'react';
import Channels from '../containers/Channels';
import Form from '../containers/Form';
import Messages from '../containers/Messages';

const Main = () =>
  (
    <div className="row">
      <div className="col-md-3">
        <h4>Channels:</h4>
        <Channels />
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md jumbotron">
            <Messages />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );

export default Main;
