import React from 'react';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      due_date: "",
      id: null,
      user_id: null
    };
    this.updateTask = this.updateTask.bind(this);
  }

  setDefaultState(props = this.props) {
    let { task } = props;
    this.setState({
      title: task.title,
      description: task.description || "",
      due_date: task.due_date || "",
      id: task.id,
      user_id: props.user_id
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setDefaultState(nextProps);
  }

  updateTask() {
    if (this.state.title !== '') {
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
