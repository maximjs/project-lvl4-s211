import React from 'react';
import Channels from '../containers/Channels';

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
            <p>Lorem ipsum doloret yuio ffghgf fdfgfhf tdhhfd hfdhd</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <form action="">
              <div className="row">
                <div className="col-md-1">
                  <button type="submit" className="btn btn-primary btn-sm">Send</button>
                </div>
                <div className="col-md-11">
                  <div className="form-group">
                    <input type="text" required value="" className="form-control" placeholder="Write a message" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

export default Main;
