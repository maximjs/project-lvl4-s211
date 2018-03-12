import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/Channels';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    currentChannelRemovable: state.channels[state.currentChannelId].removable,
    channels: Object.values(state.channels),
    isShowModalRemove: state.isShowModalRemove,
    isShowModalRename: state.isShowModalRename,
    сhannelRemovingState: state.сhannelRemovingState,
    сhannelRenamingState: state.сhannelRenamingState,
  };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Component);
