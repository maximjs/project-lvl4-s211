import React from 'react';
import Channels from '../containers/Channels';

class Main extends React.Component {
  render() {
    return (
      <div className = "row">
        <div className = "col-md-3">
          <h4>Channels:</h4>
          <Channels />
        </div>
        <div className = "col-md-9">
          <div className = "row">
            <div className = "col-md jumbotron">
              <p>Lorem ipsum doloret yuio ffghgf fdfgfhf tdhhfd hfdhd</p>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md">
              <div className="form-group">
                <input type="text" required className="form-control" placeholder="Write a message" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
