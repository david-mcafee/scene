export const fetchComments = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/tracks/${id}`,
    success,
    error: () => console.log('error from fetchcomments')
  });
};

export const postComment = (success, comment) => {
  $.ajax({
    url: "/api/comments",
    method: "POST",
    data: { comment },
    success
  });
};

export const fetchComment = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/comments/${id}`,
    success
  });
};

export const deleteComment = (id, success) => {
  $.ajax({
    url: `api/comments/${id}`,
    type: "DELETE",
    success
  });
};
