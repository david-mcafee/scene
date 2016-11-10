export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const POST_COMMENT = "POST_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
// export const UPDATE_TRACK = "UPDATE_TRACK";
// export const REQUEST_USER_TRACKS = "REQUEST_USER_TRACKS";

export const requestComments = (id) => ({
  type: REQUEST_COMMENTS,
  id
});

// export const requestUserTracks = (user_id) => ({
//   type: REQUEST_TRACKS
// });

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const postComment = url => ({
  type: POST_COMMENT,
  url
});

// NOTE: delete/remove like post/receive
export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

// export const updateTrack = track => ({
//   type: UPDATE_TRACK,
//   track
// });
