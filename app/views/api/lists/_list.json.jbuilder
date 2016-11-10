json.extract! list, :id, :title, :user_id
json.num_tasks list.tasks.count
json.num_completed_tasks list.tasks.select { |t| t.completed }.count
json.num_incomplete_tasks list.tasks.select { |t| !t.completed }.count
