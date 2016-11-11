@tasks.each do |task|
  json.set! task.id do
    json.partial! 'api/tasks/task', task: task
  end
end
json.index_summary do
  json.num_tasks @tasks.count
  json.num_incomplete_tasks @tasks.select { |t| !t.completed }.count
  json.num_complete_tasks @tasks.select { |t| t.completed }.count
end
