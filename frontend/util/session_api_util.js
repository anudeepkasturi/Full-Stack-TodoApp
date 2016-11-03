export const signup = (user, success, error) => {
  $.ajax({
    url: "/api/user",
    method: "post",
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    url: "/api/session",
    method: "post",
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: "api/session",
    method: "delete",
    success,
    error
  });
};
