export const fetchData = (query, success, error) => {
  $.ajax({
    url: `api/tasks/`,
    method: "get",
    data: query,
    success,
    error
  });
};
