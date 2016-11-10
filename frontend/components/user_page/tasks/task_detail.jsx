import React from 'react';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      due_date: "",
      id: null,
      user_id: null,
      completed: false
    };
    this.updateTask = this.updateTask.bind(this);
    this.taskStatus = this.taskStatus.bind(this);
  }

  setDefaultState(props = this.props) {
    let { task } = props;
    console.log(task);
    this.setState({
      title: task.title,
      description: task.description || "",
      due_date: task.due_date || "",
      id: task.id,
      user_id: props.user_id,
      completed: task.completed || false
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setDefaultState(nextProps);
  }

  taskStatus() {
    let completed = this.state.completed;
    completed = !completed;
    this.setState({ completed });
    this.updateTask();
  }

  updateTask() {
    if (this.state.title !== '') {
      console.log(this.state);
      this.props.updateTask({ task: this.state });
    } else {
      this.setDefaultState();
    }
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render () {
    let task = this.state;
    return (
      <div className="task">
        <div className="task-content">
          <div className="task-title">
            <input
              type="text"
              value={ task.title }
              onChange={ this.update('title') }
              onBlur={ this.updateTask }
            />
          </div>

          <div className="task-details">
            <div className="due_date">
              <label htmlFor="due_date">due</label>
                <input
                  id="due_date"
                  type="date"
                  value={ task.due_date }
                  onChange={ this.update('due_date') }
                  onBlur={ this.updateTask }
                />
            </div>

            <div className="task-status">
              <label htmlFor="completed">status</label>
                <input
                  id="completed"
                  type="button"
                  value={ task.completed ? "Incomplete" : "Complete" }
                  onClick={ this.taskStatus }
                />
            </div>

            <div className="description">
              <label htmlFor="description">description</label>
                <textarea
                  id="description"
                  value={ task.description }
                  onChange={ this.update('description') }
                  onBlur={ this.updateTask }
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
