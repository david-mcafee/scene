export const fetchUsers = (success) => {
  $.ajax({
    method: "GET",
    url: "api/users/",
    success,
    error: () => console.log("error from fetchUsers")
  });
};

export const fetchUser = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/users/${id}`,
    success,
    error: () => console.log("error from fetchUser")
  });
};
