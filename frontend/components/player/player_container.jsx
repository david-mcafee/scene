import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = ({player}) => {
    // debugger;
  let currentTrackUrl;

  if (player.current_track) {
    currentTrackUrl = player.current_track.audio_url;
  }

  return(
    {
    current_track: player.current_track,
    currentTrackUrl: currentTrackUrl,
    playing: player.playing
    }
  );
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
