import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/Channels';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    currentChannel: state.channels[state.currentChannelId],
    channels: Object.values(state.channels),
    showModalType: state.showModalType,
    сhannelRemovingState: state.сhannelRemovingState,
    сhannelRenamingState: state.сhannelRenamingState,
  };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Component);
