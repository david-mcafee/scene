export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const POST_TRACK = "POST_TRACK";

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
