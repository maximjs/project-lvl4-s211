import { connect } from 'react-redux';
import Component from '../components/App';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    messageCreatingState: state.messageCreatingState,
    сhannelCreatingState: state.сhannelCreatingState,
    isShowAddChannelForm: state.isShowAddChannelForm,
  };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Component);
