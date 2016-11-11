import { connect } from 'react-redux';
import {
  postTrack,
  requestTracks,
  receiveTracks,
  updateTrack,
  deleteTrack
  } from '../../actions/track_actions';

import {
  playTrack
} from '../../actions/player_actions';

import TrackForm from './track_form';



import { getAllTracks } from '../../reducers/selectors';


const mapStateToProps = (state, OwnProps) => {
  // debugger;
  // console.log(OwnProps.params);

  let selectedTrack;

  // debugger;
  if (OwnProps.params.track_id) {
    selectedTrack = state.users.selectedUserPageUser.tracks[OwnProps.params.track_id];
  }
  else {
    selectedTrack = {
      id: null,
      title: "",
      image_url: "",
      audio_url: ""
    };
  }

  // console.log(selectedTrack);

  return({
    // tracks: getAllTracks(state),
    selectedTrackId: OwnProps.params.track_id,
    selectedTrack: selectedTrack,
    // playTrack: playTrack,
    currentUser: state.session.currentUser
    // errors: this.state.errors
  });
};

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestTracks prop that it can use to
// call a dispatch with the requestTracks() action creator (see actions/track_actions)

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  console.log(formType);
  const processForm = (formType === 'upload') ? postTrack : updateTrack;

  return {
    playTrack: (track) => dispatch(playTrack(track)),
    requestTracks: () => dispatch(requestTracks()),
    postTrack: (userId, track) => dispatch(postTrack(userId, track)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    processForm: (userId, track) => dispatch(processForm(userId, track)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
