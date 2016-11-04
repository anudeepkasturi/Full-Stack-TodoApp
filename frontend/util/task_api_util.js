export const fetchTasks = (success, error) => {
  $.ajax({
    url: "api/tasks",
    method: "get",
    success,
    error
  });
};

export const fetchTask = (id, success, error) => {
  $.ajax({
    url: `api/tasks`,
    method: "get",
    success,
    error
  });
};
