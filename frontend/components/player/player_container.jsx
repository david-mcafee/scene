import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = (state) => {
    // debugger;
  let currentTrackUrl;

  if (state.current_track) {
    currentTrackUrl = state.current_track.audio_url;
  }

  return(
    {
    current_track: state.current_track,
    currentTrackUrl: currentTrackUrl,
    playing: state.playing
    }
  );
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
