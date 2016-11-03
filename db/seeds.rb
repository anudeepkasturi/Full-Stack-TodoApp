# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

me = User.create!({
  #id: 1
  username: "Ish",
  password: "123123"
})

guest = User.create!({
  #id: 2
  username: "Guest",
  password: "123123"
})

# tasks and lists for guest
task1 = Task.create!({
  #id: 1
  title: "Add styling to home page",
  description: "Add a border to the Title",
  due_date: Date.new(2016, 12, 31),
  user_id: 2
})
task2 = Task.create!({
  #id: 2
  title: "Paint a masterpiece",
  due_date: Date.new(2017, 1, 1),
  user_id: 2
})
task3 = Task.create!({
  #id: 3
  title: "Call Joey",
  description: "Ask him about his baby chick",
  due_date: Date.new(2017, 1, 2),
  user_id: 2
})

list1 = List.create!({
  title: "Personal",
  user_id: 2
})
list2 = List.create!({
  title: "Work",
  user_id: 2
})

list2.tasks.push(task1)
list1.tasks.push(task2)
list1.tasks.push(task3)
