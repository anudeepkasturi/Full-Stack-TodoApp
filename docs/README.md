# Todo App

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://todoprojectapp.herokuapp.com/
[trello]: https://trello.com/b/nMOAWGy9/todoapp-full-stack

## Minimum Viable Product

Todo App (Title TBA) is an organizational tool used for creating tasks and setting due dates to help you become more productive. At the end of week 9 , this app should:
* Have user authentication and a demo login
* Create tasks with a description and a due date
* Create lists that hold tasks
 + Have the option to add and delete tasks from lists
* Have a list summary with the time, number of tasks, and the number completed
* Have a search function that will show the relevant tasks

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./Wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend & Frontend Auth (2 days)
**Objective:** Users can create an account and login. Their data will persist when they login again.

### Phase 2: Task model, API and React Detail Component (1 day)
**Objective:** Users can create a task and fill out its details.

### Phase 3: List model, API and React Component (2 days)
**Objective:** Users can assign tasks to a list, lists will show a tasks index.

### Phase 4: Search Bar and Feature (2 day)
**Objective:** Users can search tasks and they will render in the tasks index Component

### Phase 5: Splash Page (1 day)
**Objective:** Create a splash page that a user will see before they login

### Phase 6: CSS Animations (1 day)
**Objective:** Add animations to components. (e.g. Task Detail Component will slide in when a task is selected)
