
export const signup = (user, success, errors) => {
  $.ajax({
    url: "/api/user",
    method: "post",
    data:  user ,
    success,
    errors
  });
};

export const login = (user, success, errors) => {
  $.ajax({
    url: "/api/session",
    method: "post",
    data:  user ,
    success,
    errors
  });
};

export const logout = (success, errors) => {
  $.ajax({
    url: "api/session",
    method: "delete",
    success,
    errors
  });
};
