import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = () => ({
  url: null,
  playing: true,
  volume: 0.8,
  played: 0,
  loaded: 0,
  duration: 0
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
