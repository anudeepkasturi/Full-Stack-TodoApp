import React from 'react';
import { withRouter } from 'react-router';

class ListSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let { summary } = nextProps;
    this.num_tasks = summary.num_tasks;
    this.num_complete_tasks = summary.num_complete_tasks;
    this.num_incomplete_tasks = summary.num_incomplete_tasks;
  }

  render () {
    let runder;
    if (this.props.params.id) {
      runder = (<div></div>);
    } else {
      runder = (
        <div>
          <div className="summary-tasks">
            <p>{ this.num_tasks }</p>
            <label>tasks</label>
          </div>
          <div className="summary-incomplete">
            <p>{ this.num_incomplete_tasks }</p>
            <label>incomplete</label>
          </div>
          <div className="summary-complete">
            <p>{ this.num_complete_tasks }</p>
            <label>completed</label>
          </div>
        </div>
      );
    }

    return (
      <div className="list-summary">
        {runder}
      </div>
    );
  }
}

export default withRouter(ListSummary);
