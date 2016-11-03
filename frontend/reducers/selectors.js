export const getAllTracks = ({ tracks }) => (
  Object.keys(tracks).map(id => tracks[id])
);
