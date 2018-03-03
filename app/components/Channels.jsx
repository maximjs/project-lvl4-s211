import React from 'react';

const Channels = (props) => {
  const { channels } = props;
  const channelsRender = channels.map(item =>
    <li key={item.id} className="list-group-item">{item.name}</li>);
  return (
    <ul className="list-group">
      {channelsRender}
    </ul>
  );
};

export default Channels;
