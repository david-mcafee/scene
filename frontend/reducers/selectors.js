export const getAllTracks = ({ tracks }) => (
  Object.keys(tracks).map(id => tracks[id])
);

export const getAllUsers = ({ users }) => (
  Object.keys(users).map(id => users[id])
);

export const getAllComments = ({ comments }) => (
  Object.keys(comments).map(id => comments[id])
);
