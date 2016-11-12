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
task4 = Task.create!({
  #id: 4
  title: "Host on Heroku",
  description: "Set up Heroku account and push to it",
  due_date: Date.new(2016, 11, 2),
  user_id: 2,
  completed: true
})

task5 = Task.create!({
  #id: 5
  title: "Practice Drawing Circles",
  description: "pi = 3.1415",
  due_date: Date.new(3141, 14, 3),
  user_id: 2,
  completed: false
})
task6 = Task.create!({
  #id: 6
  title: "Run Faster",
  description: "Try moving legs faster with bigger strides",
  due_date: "",
  user_id: 2,
  completed: false
})
task7 = Task.create!({
  #id: 7
  title: "Do 300 Push ups",
  description: "Take one push up at a time",
  due_date: Date.new(2017, 1, 1),
  user_id: 2,
  completed: false
})
task8 = Task.create!({
  #id:
  title: "Watch Star Wars",
  description: "I heard it's a classic.",
  due_date: "",
  user_id: 2,
  completed: true
})
task9 = Task.create!({
  #id:
  title: "Learn Ruby",
  description: "",
  due_date: "",
  user_id: 2,
  completed: true
})
task10 = Task.create!({
  #id:
  title: "Run a Marathon",
  description: "see 'run faster' for more tips",
  due_date: "",
  user_id: 2,
  completed: false
})
task11 = Task.create!({
  #id:
  title: "Bake a cake for your niece's birthday",
  description: "She likes chocolate",
  due_date: Date.now(2016, 11, 11),
  user_id: 2,
  completed: true
})
task12 = Task.create!({
  #id:
  title: "Climb Mount Everest",
  description: "Remember to bring a jacket",
  due_date: Date.now(2016, 11, 11),
  user_id: 2,
  completed: false
})



list1 = List.create!({
  title: "Personal",
  user_id: 2
})
list2 = List.create!({
  title: "Work",
  user_id: 2
})
list3 = List.create!({
  title: "Fitness",
  user_id: 2
})
list4 = List.create!({
  title: "Art Portfolio",
  user_id: 2
})
list5 = List.create!({
  title: "Bucket List",
  user_id: 2
})
list6 = List.create!({
  title: "World Records to Break",
  user_id: 2
})

list2.tasks.push(task1)
list1.tasks.push(task2)
list1.tasks.push(task3)
list2.tasks.push(task4)
list4.tasks.push(task5)
list6.tasks.push(task5)
list1.tasks.push(task6)
list3.tasks.push(task6)
list6.tasks.push(task6)
list3.tasks.push(task7)
list1.tasks.push(task8)
list1.tasks.push(task9)
list2.tasks.push(task9)
list5.tasks.push(task9)
list5.tasks.push(task10)
list1.tasks.push(task10)
list3.tasks.push(task10)
list1.tasks.push(task11)
list3.tasks.push(task12)
list6.tasks.push(task12)
list5.tasks.push(task12)
