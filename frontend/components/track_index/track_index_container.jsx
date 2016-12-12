import { connect } from 'react-redux';
import {
  postTrack,
  requestTracks,
  // requestUserTracks,
  receiveTracks,
  updateTrack,
  deleteTrack
  } from '../../actions/track_actions';

import { requestComments } from '../../actions/comments_actions';

import {
  playTrack
} from '../../actions/player_actions';

import TrackIndex from './track_index';



import { getAllTracks } from '../../reducers/selectors';


const mapStateToProps = (state, OwnProps) => {
  // // console.log("users tracks");
  // console.log(state.users.selectedUserPageUser.tracks);

  return({
    tracks: state.users.selectedUserPageUser.tracks,

    playTrack: playTrack,
    selectedUserPageUser: state.users.selectedUserPageUser,
    currentUser: state.session.currentUser
    // selectedTrackId: OwnProps.params.track_id,
    // selectedTrack: selectedTrack,
    // tracks: state.users.selectedUserPageUser.tracks,
  });
};

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestTracks prop that it can use to
// call a dispatch with the requestTracks() action creator (see actions/track_actions)

const mapDispatchToProps = (dispatch, { location }, OwnProps) => {
  // const formType = location.pathname.slice(1);
  // console.log(formType);
  // const processForm = (formType === 'upload') ? postTrack : updateTrack;

  return {
    playTrack: (track, username) => dispatch(playTrack(track, username)),
    // requestTracks: () => dispatch(requestTracks()),
    // requestUserTracks: (user_id) => dispatch(requestUserTracks(user_id)),
    postTrack: (url) => dispatch(postTrack(url)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    // processForm: track => dispatch(processForm(track)),
    // formType
    requestComments: (id) => dispatch(requestComments(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
