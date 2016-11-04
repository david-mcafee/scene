export const fetchTracks = (success) => {
  $.ajax({
    method: "GET",
    url: "api/tracks/",
    success,
    error: () => console.log('error from fetchTracks')
  });
};

export const postTrack = (success, url) => {
  $.ajax({
    url: "/api/tracks",
    method: "POST",
    data: { track: {
      title: "test title",
      image_url: "test_image_url",
      audio_url: url
    }},
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
