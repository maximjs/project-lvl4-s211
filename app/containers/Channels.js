import { connect } from 'react-redux';
import Component from '../components/Channels.jsx'; // eslint-disable-line

const mapStateToProps = (state) => {
  const props = {
    channels: Object.values(state.channels),
  };
  return props;
};

export default connect(mapStateToProps)(Component);
