import { connect } from 'react-redux';
import { requestTracks, receiveTracks } from '../../actions/track_actions';
// import TrackForm from '../track_form/track_form';

const mapStateToProps ({ tracks }) => ({
  // tracks: tracks;
});

const mapDispatchToProps = (dispatch) => ({
  // NOTE: perhaps displaying a track?
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
