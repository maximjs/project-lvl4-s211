import React from 'react';

class Channels extends React.Component {
  render() {
    const channelsArr = Object.values(this.props.channels);
    const channels = channelsArr.map(item =>
      <li key={item.id} className="list-group-item">{item.name}</li>);
    return (
      <ul className="list-group">
        {channels}
      </ul>
    );
  }
}

export default Channels;
