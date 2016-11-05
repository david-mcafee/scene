export const fetchTracks = (success) => {
  $.ajax({
    method: "GET",
    url: "api/tracks/",
    success,
    error: () => console.log('error from fetchTracks')
  });
};

export const postTrack = (success, track) => {
  $.ajax({
    url: "/api/tracks",
    method: "POST",
    data: { track },
    success
  });
};

export const fetchTrack = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/tracks/${id}`,
    success
  });
};

export const deleteTrack = (id, success) => {
  $.ajax({
    url: `api/tracks/${id}`,
    type: "DELETE",
    success
  });
};

export const updateTrack = (track, success) => {
  $.ajax({
    url: `/api/tracks/${track.id}`,
    method: "PATCH",
    data: { track },
    success
  });
};
