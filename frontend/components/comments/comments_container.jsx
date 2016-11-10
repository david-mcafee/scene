import { connect } from 'react-redux';

import {
  postComment,
  requestComments,
  receiveComments,
  // updateComment,
  deleteComment
} from '../../actions/comments_actions';

import CommentIndex from './comments_index';

import { getAllComments } from '../../reducers/selectors';


const mapStateToProps = ({comments}, OwnProps) => {
  // console.log(OwnProps);
  return({
    comments: getAllComments(comments)
  });
};

// NOTE: The TrackIndex also needs a way to trigger a request for tracks once
// it has mounted. give it a requestTracks prop that it can use to
// call a dispatch with the requestTracks() action creator (see actions/track_actions)

const mapDispatchToProps = (dispatch, { location }, OwnProps) => {
  // const forType = location.pathname.slice(1);
  // console.log(formType);
  // const processForm = (formType === 'upload') ? postComment : updateComment;

  return {
    requestComments: (id) => dispatch(requestComments(id)),
    postComment: (url) => dispatch(postComment(url)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    processForm: comment => dispatch(postComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
