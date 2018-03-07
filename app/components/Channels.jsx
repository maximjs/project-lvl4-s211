/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import classnames from 'classnames';
import RemoveChannelModal from './RemoveChannelModal.jsx'; // eslint-disable-line
import RenameChannelModal from './RenameChannelModal.jsx'; // eslint-disable-line

class Channels extends React.Component {
  state={ clickedChannelId: null, removable: false };

  handleChannelClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
  };

  handleRemoveChannel = () => {
    const generalChannel = this.props.channels.find(channel => channel.name === 'general');
    this.props.requestRemoveChannel(this.state.clickedChannelId);
    this.props.changeCurrentChannel({ channelId: generalChannel.id });
  };

  handleMenuChannelClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
    const clickedChannel = this.props.channels.find(channel => channel.id === id);
    this.setState({
      clickedChannelId: id,
      removable: clickedChannel.removable,
    });
  };

  channelsRender() {
    const { channels } = this.props;
    return channels.map((channel) => {
      const btnClass = classnames({
        btn: true,
        'btn-light': this.props.currentChannelId !== channel.id,
        'btn-primary': this.props.currentChannelId === channel.id,
      });
      const btnDropdownClass = classnames({
        btn: true,
        'btn-light': this.props.currentChannelId !== channel.id,
        'btn-primary': this.props.currentChannelId === channel.id,
        'dropdown-toggle': true,
        'dropdown-toggle-split': true,
      });
      return (
        <div key={channel.id} className="btn-group">
          <button type="button" onClick={this.handleChannelClick(channel.id)} className={btnClass}>{channel.name}</button>
          <button type="button" className={btnDropdownClass} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only" />
          </button>
          <div className="dropdown-menu">
            <button type="button" onClick={this.handleMenuChannelClick(channel.id)} className="btn dropdown-item" data-toggle="modal" data-target="#removeChannelModal">Remove</button>
            <button type="button" onClick={this.handleMenuChannelClick(channel.id)} className="btn dropdown-item" data-toggle="modal" data-target="#renameChannelModal">Rename</button>
          </div >
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="btn-group-vertical">
          {this.channelsRender()}
        </div>
        <RemoveChannelModal removable={this.state.removable} handleRemoveChannel={this.handleRemoveChannel} />
        <RenameChannelModal requestRenameChannel={this.props.requestRenameChannel} currentChannelId={this.props.currentChannelId} />
      </div>
    );
  }
}

export default Channels;
