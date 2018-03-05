import React from 'react';
import classnames from 'classnames';

class Channels extends React.Component {
  handleButtonClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
  };

  render() {
    const { channels } = this.props;
    const channelsRender = channels.map((channel) => {
      const btnClass = classnames({
        btn: true,
        'btn-primary': this.props.currentChannelId === channel.id,
      });
      // return (
      //   <li key={channel.id} className="list-group-item">
      // <button type="button" onClick={this.handleButtonClick(channel.id)} className={btnClass}>{channel.name}</button>
      //   </li>
      // );
      return (
        <div key={channel.id} className="btn-group">
          <button type="button" onClick={this.handleButtonClick(channel.id)} className={btnClass}>{channel.name}</button>
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
            <span className="caret" />
          </button>
          <ul className="dropdown-menu" role="menu">
            <li><button type="button" className="btn">Remove</button></li>
            <li><button type="button" className="btn">Rename</button></li>
          </ul>
        </div>
      );
    });

    return (
      // <ul className="list-group">
      //   {channelsRender}
      // </ul>
      <div className="btn-group-vertical">
        {channelsRender}
      </div>
    );
  }
}

export default Channels;
