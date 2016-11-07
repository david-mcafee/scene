import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = ({current_song_url}) => ({
  current_song_url: current_song_url
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
