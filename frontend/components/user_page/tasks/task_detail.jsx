import React from 'react';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    let { task } = this.props;
    return (
      <div className="task">
        <div className="task-title">
          <input
            type="text"
            value={ task.title }
            onChange={ this.update('title') }
            onBlur={ this.updateTask }
          />
        </div>

        <div className="task-details">
          <label>due
            <input
              type="text"
              value={ task.due_date || "" }
              onChange={ this.update('due_date') }
            />
          </label>
          <label>description
            <input
              type="textarea"
              value={ task.description || "" }
              onChange={ this.update('description') }
            />
          </label>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
