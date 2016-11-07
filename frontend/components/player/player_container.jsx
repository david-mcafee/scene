import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = ({tracks}) => ({
  current_song_url: tracks.current_song_url,
  playing: tracks.playing
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
