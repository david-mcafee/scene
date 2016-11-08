export const fetchUsers = (success) => {
  $.ajax({
    method: "GET",
    url: "api/users/",
    success,
    error: () => console.log("error from fetchUsers")
  });
};

export const fetchUser = (success) => {
  $.ajax({
    method: "GET",
    url: "api/users/:user_id",
    success,
    error: () => console.log("error from fetchUser")
  });
};
