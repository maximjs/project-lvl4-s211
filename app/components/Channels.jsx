/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import classnames from 'classnames';
import RemoveChannelModal from './RemoveChannelModal';
import RenameChannelModal from './RenameChannelModal';

class Channels extends React.Component {
  handleShowModalRemove = id => () => {
    this.props.showModal({ channelId: id, modalType: 'removingChannelModal' });
  };

  handleShowModalRename = id => () => {
    this.props.showModal({ channelId: id, modalType: 'renamingChannelModal' });
  };

  handleChannelClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
  };

  handleRemoveChannel = () => {
    this.props.sendRemoveChannel(this.props.currentChannelId);
  };

  channelsRender() {
    const { channels } = this.props;
    return channels.map((channel) => {
      const btnClass = classnames({
        btn: true,
        'btn-light': this.props.currentChannelId !== channel.id,
        'btn-primary': this.props.currentChannelId === channel.id,
      });
      const btnDropdownClass = classnames(btnClass, {
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
    return (
      <div>
        <div className="btn-group-vertical">
          {this.channelsRender()}
        </div>
        <RemoveChannelModal
          showModalType={this.props.showModalType}
          hideModal={this.props.hideModal}
          removable={this.props.currentChannel.removable}
          handleRemoveChannel={this.handleRemoveChannel}
          сhannelRemovingState={this.props.сhannelRemovingState}
        />
        <RenameChannelModal
          showModalType={this.props.showModalType}
          hideModal={this.props.hideModal}
          sendRenameChannel={this.props.sendRenameChannel}
          currentChannelId={this.props.currentChannelId}
          сhannelRenamingState={this.props.сhannelRenamingState}
        />
      </div>
    );
  }
}

export default Channels;
