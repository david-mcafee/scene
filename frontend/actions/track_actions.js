export const REQUEST_TRACKS = "REQUEST_TRACKS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const requestTracks = () => ({
  type: REQUEST_TRACKS
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});
