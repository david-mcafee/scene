import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = (state) => {
    // debugger;
  let currentTrackUrl;

  if (state.player.current_track) {
    currentTrackUrl = state.player.current_track.audio_url;
  }

  let nameToDisplay;
  if (state.users.selectedUserPageUser) {
    nameToDisplay = state.users.selectedUserPageUser.username;
  }

  return(
    {
      nameToDisplay: nameToDisplay,
      current_track: state.player.current_track,
      currentTrackUrl: currentTrackUrl,
      playing: state.player.playing
    }
  );
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
