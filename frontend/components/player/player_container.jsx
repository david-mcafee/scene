import { connect } from 'react-redux';
import Player from './player';
import { requestTrack } from '../../actions/track_actions';

const mapStateToProps = (state) => {
    // debugger;
  let currentTrackUrl;

  if (state.player.current_track) {
    currentTrackUrl = state.player.current_track.audio_url;
  }

  // let nameToDisplay;
  // if (state.users.selectedUserPageUser) {
  //   nameToDisplay = state.users.selectedUserPageUser.username;
  // }

  return(
    {
      current_track_username: state.player.current_track_username || "The Undercover Dream Lovers",
      current_track: state.player.current_track || {
        "id": 45,
        "title": "When You Know It's Alright",
        "image_url": "http://res.cloudinary.com/localscene/image/upload/v1478765152/cover_qty27o.jpg",
        "audio_url": "http://res.cloudinary.com/localscene/video/upload/v1478765314/The_Undercover_Dream_Lovers_-_While_It_s_In_Style_-_01_When_You_Know_It_s_Alright_o0waqh.mp3",
        "user_id": 5,
        "user": {
        "id": 5,
        "username": "The Undercover Dream Lovers",
        "email": "theundercoverdreamlovers@david-mcafee.com",
        "artist": "t",
        "banner_url": "http://res.cloudinary.com/localscene/image/upload/c_crop,h_960,w_960/v1478765153/UndercoverDreamLoversProfile_bmc70g.jpg",
        "password_digest": "$2a$10$Aw58fkn2xuQr27rTegCpbeKUksSgpMVpKc.Cemc2v0IQV3ZKP/TXu",
        "session_token": "KrnkgNa4e67Oa4ZPGMLU+A==",
        "created_at": "2016-12-11T23:37:01.795Z",
        "updated_at": "2016-12-11T23:37:01.795Z"
        },
        "comments": [],
        "age": "about 18 hours"
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
