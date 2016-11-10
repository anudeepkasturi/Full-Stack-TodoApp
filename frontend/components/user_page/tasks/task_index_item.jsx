import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchTask(this.props.id);
    this.props.selectTask(this.props.id);
  }

  render () {
    let { title, id } = this.props;
    let path = `home/${this.props.params.title || "inbox"}/${id}`;
    return (
      <li className="task-index-item">
        <Link to={path} onClick={ this.handleClick }>{ title }</Link>
      </li>
    );
  }
}

$(document).click((event) => {
  let $el = $(event.target);
  if (!($el.attr('class') === 'edit-list-button active')) {
    let dropdowns = $(document).find('div.dropdown-container > div');
    dropdowns.toArray().forEach(dropdown => {
      $(dropdown).removeClass('show');
    });
    let button = $('.edit-list-button.active');

    button.removeClass('active');

    event.stopPropagation();
  }
});


export default withRouter(TaskIndexItem);
