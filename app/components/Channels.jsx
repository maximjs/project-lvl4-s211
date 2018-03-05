import React from 'react';
import classnames from 'classnames';

class Channels extends React.Component {
  handleButtonClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
  };

  render() {
    console.log(this.props);
    const { channels } = this.props;
    const channelsRender = channels.map((channel) => {
      const btnClass = classnames({
        btn: true,
        'btn-primary': this.props.currentChannelId === channel.id,
      });
      return (
        <li key={channel.id} className="list-group-item">
          <button type="button" onClick={this.handleButtonClick(channel.id)} className={btnClass}>{channel.name}</button>
        </li>
      );
    });

    return (
      <ul className="list-group">
        {channelsRender}
      </ul>
    );
  }
}

export default Channels;
