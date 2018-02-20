import React from 'react';

class Channels extends React.Component {
  state = { ...window.gon.channels };
  render() {
    const channelList = Object.keys(this.state).map(item =>
      <li className="list-group-item" key={this.state[item].id}>{this.state[item].name}</li>);
    return (
      <ul className="list-group">
        {channelList}
      </ul>
    );
  }
}

export default Channels;
