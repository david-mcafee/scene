import { connect } from 'react-redux';
import Player from './player';
import { requestTrack } from '../../actions/track_actions';

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
      current_track: state.player.current_track || {
        "id": 1,
        "title": "Guest Song (Please Edit or Delete!)",
        "image_url": "http://res.cloudinary.com/localscene/image/upload/v1478806147/xamd8t29ogoptv4yo0vp.png",
        "audio_url": "http://res.cloudinary.com/localscene/video/upload/v1478765314/The_Undercover_Dream_Lovers_-_While_It_s_In_Style_-_01_When_You_Know_It_s_Alright_o0waqh.mp3",
        "user_id": 1,
        "user": {
        "id": 1,
        "username": "Guest",
        "email": "guest@david-mcafee.com",
        "artist": "t",
        "banner_url": "https://s-media-cache-ak0.pinimg.com/236x/a7/7e/3d/a77e3d34eb1a05f7bc930d3f719c0846.jpg",
        "password_digest": "$2a$10$g53l95ywDIj4mrE2CJbW1eajoijMlE2ICdNvd95XIELozvNPPUzZ2",
        "session_token": "kjYblpNeNUAfRNGOwaSMAw==",
        "created_at": "2016-12-11T23:37:01.451Z",
        "updated_at": "2016-12-12T01:26:05.313Z"
        },
        "comments": [],
        "age": "about 2 hours"
        },
      currentTrackUrl: currentTrackUrl,
      playing: state.player.playing
    }
  );
};

const mapDispatchToProps = dispatch => {
  return {
    requestTrack: (track) => dispatch(requestTrack(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
