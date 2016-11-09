import React from 'react';
import { Link } from 'react-router';


class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleClick() {
    this.props.fetchTasks(this.props.id);
    this.props.selectList(this.props.id);
  }

  handleDropdown(e) {
    console.log(e);
    $(`#${this.dropdownId}`).toggleClass("show");
  }

  render () {
    let { title, id } = this.props;
    let path = `/home/${title}`;

    this.dropdownId = `myDropdown${id}`;

    return (
      <li className="list-index-item">
        <Link to={path} onClick={this.handleClick}>{ title }</Link>
        <button onClick={ this.handleDropdown }>∇</button>

        <div id={this.dropdownId} className="dropdown-content">
          <a href="#">Edit</a>
        </div>

      </li>
    );
  }
}

export default ListIndexItem;
