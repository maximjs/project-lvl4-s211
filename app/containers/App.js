import { connect } from 'react-redux';
import Component from '../components/App.jsx'; // eslint-disable-line
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    messageCreatingState: state.messageCreatingState,
    сhannelCreatingState: state.сhannelCreatingState,
    channels: Object.values(state.channels),
  };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Component);
