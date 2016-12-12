export const PLAY_TRACK = "PLAY_TRACK";

export const playTrack = (track, username) => ({
  type: PLAY_TRACK,
  track,
  username
});
