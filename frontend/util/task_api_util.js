export const fetchTasks = (success, error, listId) => {
  $.ajax({
    url: "api/tasks",
    method: "get",
    data: { listId },
    success,
    error
  });
};

export const fetchTask = (id, success, error) => {
  $.ajax({
    url: `api/tasks/${id}`,
    method: "get",
    success,
    error
  });
};

export const destroyTask = (id, success, error) => {
  $.ajax({
    url: `api/tasks/${id}`,
    method: "delete",
    success,
    error
  });
};

export const createTask = (task, success, error) => {
  $.ajax({
    url: `api/tasks`,
    method: "post",
    data: task,
    success,
    error
  });
};

export const updateTask = (task, success, error) => {
  $.ajax({
    url: `api/tasks/${task.task.id}`,
    method: "patch",
    data: task,
    success,
    error
  });
};
