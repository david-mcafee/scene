export const fetchUsers = (success) => {
  $.ajax({
    method: "GET",
    url: "api/users/",
    success,
    error: () => console.log("error from fetchUsers")
  });
};
