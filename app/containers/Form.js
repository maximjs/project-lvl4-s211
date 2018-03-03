import { connect } from 'react-redux';
import Component from '../components/Form.jsx'; // eslint-disable-line

const mapStateToProps = (state) => {
  const props = {
    newMessageText: state.newMessageText,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

export default connect(mapStateToProps)(Component);
