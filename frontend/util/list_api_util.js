export const fetchLists = (success, error) => {
  $.ajax({
    url: "api/lists",
    method: "get",
    success,
    error
  });
};

export const fetchList = (id, success, error) => {
  $.ajax({
    url: `api/lists/${id}`,
    method: "get",
    success,
    error
  });
};

export const destroyList = (id, success, error) => {
  $.ajax({
    url: `api/lists/${id}`,
    method: "delete",
    success,
    error
  });
};

export const createList = (list, success, error) => {
  $.ajax({
    url: `api/lists/${list.id}`,
    method: "post",
    data: list,
    success,
    error
  });
};

export const updateList = (list, success, error) => {
  $.ajax({
    url: `api/lists/${list.id}`,
    method: "patch",
    data: list,
    success,
    error
  });
};
