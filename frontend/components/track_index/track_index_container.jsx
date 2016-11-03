import { connect } from 'react-redux';
import { requestTracks, receiveTracks } from '../../actions/track_actions';
import TrackIndex from './track_index';
// import TrackForm from '../track_form/track_form';

const mapStateToProps = state => ({
  tracks: state.tracks
});

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestBenches prop that it can use to
// call a dispatch with the requestBenches() action creator.

const mapDispatchToProps = (dispatch) => ({
  requestTracks: () => dispatch(requestTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
