/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import classnames from 'classnames';
import RemoveChannelModal from './RemoveChannelModal';
import RenameChannelModal from './RenameChannelModal';

class Channels extends React.Component {
  state = {
    showModalRemove: false,
    showModalRename: false,
  };

  handleShowModalRemove = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
    this.setState({ showModalRemove: true });
  };

  handleShowModalRename = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
    this.setState({ showModalRename: true });
  };

  handleCloseModalRemove = () => {
    this.setState({ showModalRemove: false });
  };

  handleCloseModalRename = () => {
    this.setState({ showModalRename: false });
  };

  handleChannelClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
  };

  handleRemoveChannel = () => {
    this.props.requestRemoveChannel(this.props.currentChannelId);
    this.setState({ showModalRemove: false });
  };

  channelsRender() {
    const { channels } = this.props;
    return channels.map((channel) => {
      const name = this.props.currentChannelId !== channel.id ? 'btn-light' : 'btn-primary';
      const btnClass = classnames({
        btn: true,
        [name]: true,
      });
      const btnDropdownClass = classnames({
        btn: true,
        [name]: true,
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
            <button type="button" onClick={this.handleShowModalRemove(channel.id)} className="btn dropdown-item">Remove</button>
            <button type="button" onClick={this.handleShowModalRename(channel.id)} className="btn dropdown-item">Rename</button>
          </div>
        </div>
      );
    });
  }

  render() {
    const { channels, currentChannelId } = this.props;
    const { removable } = channels.find(channel => channel.id === currentChannelId);
    return (
      <div>
        <div className="btn-group-vertical">
          {this.channelsRender()}
        </div>
        <RemoveChannelModal
          show={this.state.showModalRemove}
          handleCloseModalRemove={this.handleCloseModalRemove}
          removable={removable}
          handleRemoveChannel={this.handleRemoveChannel}
        />
        <RenameChannelModal
          show={this.state.showModalRename}
          handleCloseModalRename={this.handleCloseModalRename}
          requestRenameChannel={this.props.requestRenameChannel}
          currentChannelId={this.props.currentChannelId}
        />
      </div>
    );
  }
}

export default Channels;
