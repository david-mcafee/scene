export const getAllTracks = ({ tracks }) => (
  Object.keys(tracks).map(id => tracks[id])
);

export const getAllUsers = ({ users }) => {
  // debugger;
  return(
    Object.keys(users).map(id => users[id])
  );
};
