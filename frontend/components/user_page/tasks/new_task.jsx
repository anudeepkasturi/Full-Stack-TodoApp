import React from 'react';
import { withRouter } from 'react-router';

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField() {
    return (e) => this.setState({
      title: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.list);
    let task = {
      title: this.state.title,
      list_id: this.props.list
    };
    this.props.createTask({ task });
    this.setState({ title: "" });
  }

  render () {
    let { title } = this.state;
    return (
      <div className="new-task">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="New Task"
            onChange={ this.updateField() }
            value={ title }
          />
          <input type="submit" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewTask);
