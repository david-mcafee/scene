import { connect } from 'react-redux';
import { postTrack, requestTracks, receiveTracks } from '../../actions/track_actions';
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

const mapDispatchToProps = (dispatch) => ({
  requestTracks: () => dispatch(requestTracks()),
  postTrack: (url) => dispatch(postTrack(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
