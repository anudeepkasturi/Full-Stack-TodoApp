Sample state
{
  current_user: {
    username: "ish"
    id: 1
  }
  lists: {
    1: {
      id: 1
      title: "Work"
      tasks: [1, 4, 5] // by id
    }
  }
  tasks: {
    1: {
      id: 1
      title: "Make a website"
      list_id: 1
      description: "full stack"
    }
  }
  list: {} // selected list
  task: {} // selected task
  search: ""
}
