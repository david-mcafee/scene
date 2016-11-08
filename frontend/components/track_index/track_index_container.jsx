import { connect } from 'react-redux';
import {
  postTrack,
  requestTracks,
  receiveTracks,
  updateTrack,
  deleteTrack,
  playTrack
  } from '../../actions/track_actions';
import TrackIndex from './track_index';



import { getAllTracks } from '../../reducers/selectors';


const mapStateToProps = (state, OwnProps) => {
  // debugger;
  console.log(OwnProps.params);
  return({
    tracks: getAllTracks(state),
    selectedTrackId: 2
    // selectedTrackId: OwnProps.params.track_id
    // errors: this.state.errors
  });
};

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestTracks prop that it can use to
// call a dispatch with the requestTracks() action creator (see actions/track_actions)

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = "upload";
  // const formType = location.pathname.slice(1);
  console.log(formType);
  const processForm = (formType === 'upload') ? postTrack : updateTrack;

  return {
    playTrack: (url) => dispatch(playTrack(url)),
    requestTracks: () => dispatch(requestTracks()),
    postTrack: (url) => dispatch(postTrack(url)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    processForm: track => dispatch(processForm(track)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
