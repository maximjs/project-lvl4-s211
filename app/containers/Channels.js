import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/Channels';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    channels: Object.values(state.channels),
  };
  return props;
};

export default connect(mapStateToProps, actionCreators)(Component);
