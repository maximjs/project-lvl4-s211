import { connect } from 'react-redux';
import Component from '../components/Messages.jsx'; // eslint-disable-line

const mapStateToProps = (state) => {
  const channelMessages = state.messages.filter(el => el.channelId === state.currentChannelId);
  const props = {
    messages: channelMessages,
  };
  return props;
};

export default connect(mapStateToProps)(Component);
