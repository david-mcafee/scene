export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const POST_TRACK = "POST_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";

export const requestTracks = () => ({
  type: REQUEST_TRACKS
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const postTrack = url => ({
  type: POST_TRACK,
  url
});

// NOTE: delete/remove like post/receive
export const deleteTrack = id => ({
  type: DELETE_TRACK,
  id
});

export const removeTrack = track => ({
  type: REMOVE_TRACK,
  track
});

export const updateTrack = track => ({
  type: UPDATE_TRACK,
  track
});
