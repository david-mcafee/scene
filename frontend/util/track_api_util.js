export const fetchTracks = (success) => {
  $.ajax({
    method: "GET",
    url: "api/tracks/",
    success,
    error: () => console.log('error from fetchTracks')
  });
};
