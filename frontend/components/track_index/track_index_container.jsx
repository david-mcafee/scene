import { connect } from 'react-redux';
import {
  postTrack,
  requestTracks,
  receiveTracks,
  editTrack,
  deleteTrack
  } from '../../actions/track_actions';
import TrackIndex from './track_index';

// NOTE: review selector in selector file - this is simply for
// formatting to an array
import { getAllTracks } from '../../reducers/selectors';
// import TrackForm from '../track_form/track_form';

const mapStateToProps = state => ({
  tracks: getAllTracks(state)
});

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestTracks prop that it can use to
// call a dispatch with the requestTracks() action creator (see actions/track_actions)

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  console.log(formType);
  const processForm = (formType === 'upload') ? postTrack : editTrack;

  return {
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
