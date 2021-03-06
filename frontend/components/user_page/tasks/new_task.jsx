import React from 'react';
import { withRouter } from 'react-router';

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showSubmit = this.showSubmit.bind(this);
    this.hideSubmit = this.hideSubmit.bind(this);
  }

  updateField() {
    return (e) => this.setState({
      title: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let task = {
      title: this.state.title,
      list_id: this.props.list
    };
    this.props.createTask({ task });
    this.setState({ title: "" });
  }

  showSubmit() {
    $('#new-task-submit').removeClass('hide');
    $('#new-task-submit').removeClass('slideOutUp');
    $('#new-task-submit').addClass('slideInDown');
  }

  hideSubmit(e) {
    setTimeout(() => {
      $('#new-task-submit').removeClass('slideInDown');
      $('#new-task-submit').addClass('slideOutUp');
      setTimeout(() => {
        $('#new-task-submit').addClass('hide');
      }, 200);
    }, 200);
  }

  render () {
    let { title } = this.state;
    return (
      <div className="new-task">
        <form onSubmit={ this.handleSubmit }>
          <div className="new-task-title">
            <input
              type="text"
              placeholder="Add a task..."
              onChange={ this.updateField() }
              value={ title }
              onFocus={ this.showSubmit }
              onBlur={ this.hideSubmit }
            />
          </div>
          <input
            id="new-task-submit"
            type="submit"
            value="Add Task"
            className="hide animated"
            disabled={ title === ''}/>
        </form>
      </div>
    );
  }
}

export default withRouter(NewTask);
