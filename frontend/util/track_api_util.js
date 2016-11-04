export const fetchTracks = (success) => {
  $.ajax({
    method: "GET",
    url: "api/tracks/",
    success,
    error: () => console.log('error from fetchTracks')
  });
};

export const uploadTrack = (success, url) => {
  $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: {
      title: "uploaded_track",
      image_url: url,
      audio_url: url,
      user_id: 5
    },
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
