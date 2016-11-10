import { connect } from 'react-redux';

import {
  postComment,
  requestComments,
  receiveComments,
  // updateComment,
  deleteComment
} from '../../actions/comment_actions';

import CommentIndex from './comment_index';

import { getAllComments } from '../../reducers/selectors';


const mapStateToProps = (state, OwnProps) => {
  return({
    selectedTrackPageTrack: state.tracks.selectedTrackPageTrack
  });
};

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestTracks prop that it can use to
// call a dispatch with the requestTracks() action creator (see actions/track_actions)

const mapDispatchToProps = (dispatch, { location }, OwnProps) => {
  const formType = location.pathname.slice(1);
  console.log(formType);
  const processForm = (formType === 'upload') ? postComment : updateComment;

  return {
    requestComments: () => dispatch(requestComments()),
    postComment: (url) => dispatch(postComment(url)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    processForm: Comment => dispatch(processForm(Comment)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
