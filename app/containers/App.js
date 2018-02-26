import { connect } from 'react-redux';
import App from '../components/App.jsx'; // eslint-disable-line

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
  };
  return props;
};

export default connect(mapStateToProps)(App);
