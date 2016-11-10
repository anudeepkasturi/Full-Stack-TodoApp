import React from 'react';

class ListSummary extends React.Component {
  render () {

    let list = this.props.lists[this.props.list];
    // console.log(list);
    return (
      <div className="list-summary">
        <div className="summary-tasks">
          {/*<p>{ list.num_tasks }</p>*/}
        </div>
        <div className="summary-complete">
          {/*<p>{ list.num_completed_tasks }</p>*/}
        </div>
        <div className="summary-incomplete">
          {/*<p>{ list.num_incomplete_tasks }</p>*/}
        </div>
      </div>
    );
  }
}

export default ListSummary;
