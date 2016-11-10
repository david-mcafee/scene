import { connect } from 'react-redux';
import {
  postTrack,
  requestTracks,
  // requestUserTracks,
  receiveTracks,
  updateTrack,
  deleteTrack
  } from '../../actions/track_actions';

import {
  playTrack
} from '../../actions/player_actions';

import TrackIndex from './track_index';



import { getAllTracks } from '../../reducers/selectors';


const mapStateToProps = (state, OwnProps) => {
  console.log("users tracks");
  console.log(state.users.selectedUserPageUser.tracks);

  return({
    // tracks: getAllTracks(state),
    // selectedTrackId: OwnProps.params.track_id,
    // selectedTrack: selectedTrack,
    playTrack: playTrack,
    tracks: state.users.selectedUserPageUser.tracks,
    selectedUserPageUser: state.users.selectedUserPageUser
    // errors: this.state.errors
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
    playTrack: (track) => dispatch(playTrack(track)),
    requestTracks: () => dispatch(requestTracks()),
    // requestUserTracks: (user_id) => dispatch(requestUserTracks(user_id)),
    postTrack: (url) => dispatch(postTrack(url)),
    deleteTrack: (id) => dispatch(deleteTrack(id))
    // processForm: track => dispatch(processForm(track)),
    // formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
