export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const POST_TRACK = "POST_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const requestTracks = () => ({
  type: REQUEST_TRACKS
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
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
