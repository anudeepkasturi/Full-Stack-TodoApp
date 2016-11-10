export const fetchData = (success, error) => {
  $.ajax({
    url: `api/tasks/search`,
    method: "get",
    success,
    error
  });
};
