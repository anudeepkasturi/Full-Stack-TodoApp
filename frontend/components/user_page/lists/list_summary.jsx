import React from 'react';
import { withRouter } from 'react-router';

class ListSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let { summary } = nextProps;
    this.num_tasks = summary.num_tasks || 0;
    this.num_complete_tasks = summary.num_complete_tasks || 0;
    this.num_incomplete_tasks = summary.num_incomplete_tasks || 0;
  }

  render () {
    let listSummary;
    if (this.props.params.id) {
      listSummary = (<div></div>);
    } else {
      listSummary = (
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
        {listSummary}
      </div>
    );
  }
}

export default withRouter(ListSummary);
