# Taskable

Check out the [live site][heroku]!
[heroku]: http://www.taskable.tech/

Taskable is a full-stack web application cloned from Remember The Milk. It allows users to organize their todo lists with a friendly and intuitive user experience. It is built on a Ruby on Rails backend, a Postgres RDBMS and a React/Redux frontend.

## Features

### Secure Signup & User Authentication
Taskable allows you to create an account to save all of your personal data, but feel free to use the guest login to take a quick tour.

![login-screenshot]
[login-screenshot]: ./docs/login-screenshot.png

### Lists & Tasks
Upon Login, the database is queried to find all of the user's todo lists, along with all of their tasks. This data gets stored in the application state.

![home-page-screenshot]
[home-page-screenshot]: ./docs/home-page-screenshot.png

When a specific list is selected, only tasks that are part of that list are served from the backend, and the tasks displayed are re-rendered as soon as the information is received and set into the application state.

Finally when a specific task is selected, the details of that task are pulled up in a new component that covers the list summary.

![task-detail-screenshot]
[task-detail-screenshot]: ./docs/task-detail-screenshot.png

Here, when a user edits any detail field of the task, the database gets automatically updated as soon as the user is done typing. This is done by using an ```onBlur``` hook on each input element. The ```onBlur``` hook fires an AJAX request that ```patch```es the new data entered. The ```onChange``` hook is used to set the internal state of the component to match the input field, thus making this a React controlled component. Instead of allowing the form element to manage its own state, the state of the form is controlled using the local state of the React component.

```js
<div className="task-title">
  <input
    type="text"
    value={ task.title }
    onChange={ this.update('title') }
    onBlur={ this.updateTask }
  />
</div>
```

## Future Development
### Optimized Search

Right now, a basic search is implemented that queries the database on every keystroke to filter out tasks. This can become very costly depending on user behavior. To optimize this, a throttling or debouncing method must be implemented. Throttling limits how many calls can be made in a set interval, while debouncing ensures only one call is made for an event that fires multiple times.

### Filtering by Due Date

All users will have a set of standard lists that will filter tasks based on their due dates. A list for tasks due 'Today', 'Tomorrow', and 'This Week' will be implemented. These lists will need to receive the current date, and filter tasks accordingly.
