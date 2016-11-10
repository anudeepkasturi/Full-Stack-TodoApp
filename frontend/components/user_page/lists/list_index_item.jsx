import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownModalOpen: false,
      editListModalOpen: false,
      editedList: {
        id: null,
        title: ""
      }
    };

    this.dropdownId = `dropdown${this.props.id}`;

    this.handleClick = this.handleClick.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.editList = this.editList.bind(this);

    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.openEditListModal = this.openEditListModal.bind(this);
    this.closeEditListModal = this.closeEditListModal.bind(this);
  }

  openEditListModal() {
    this.setState({
      dropdownModalOpen: false,
      editListModalOpen: true,
      editedList: {
        id: this.props.id,
        title: this.props.title
      }
    });
  }

  closeEditListModal() {
    this.setState({editListModalOpen: false});
  }

  updateField() {
    return (e) => this.setState({
      editedList: {
        id: this.props.id,
        title: e.currentTarget.value
      }
    });
  }

  handleClick() {
    this.props.fetchTasks(this.props.id);
    this.props.selectList(this.props.id);
  }

  deleteList() {
    this.closeDropdown();
    this.props.destroyList(this.props.id);
  }

  editList() {
    if (this.state.editedList.title === "") {
      this.errors = "List name cannot be blank";
    } else {
      this.closeEditListModal();
      this.props.updateList({ list: this.state.editedList });
    }
  }

  closeDropdown() {
  }

  toggleDropdown() {
    $(`#${this.dropdownId}`).toggleClass('show');
  }


  render () {
    let { title, id } = this.props;
    let path = `/home/${title}`;


    return (
      <li className="list-index-item">
        <Link to={path} onClick={this.handleClick}>{ title }</Link>

        <div className="dropdown-container">
          <button
            className="edit-list-button"
            onClick={ this.toggleDropdown }
          >▼</button>
          <div id={this.dropdownId}>
              <a onClick={ this.openEditListModal }>Edit</a>
              <a onClick={ this.deleteList }>Delete</a>
          </div>
        </div>

        {/* edit List Modal */}
        <Modal isOpen={ this.state.editListModalOpen }
          onRequestClose={ this.closeEditListModal }
          className="ModalClass" >
          <div className="modal-div">
            <h2>Rename list</h2>
            <form onSubmit={ this.editList }>
              <div className="input">
                <label>List name:
                  <input
                    type="text"
                    value={ this.state.editedList.title }
                    className="input-text"
                    onChange={this.updateField()}>
                  </input>
                </label>
              </div>

              <div className="buttons">
                <input type="submit" value="Save"></input>
                <button onClick={this.closeEditListModal}>Cancel</button>
              </div>

            </form>
          </div>
        </Modal>
      </li>
    );
  }
}

$(document).click((event) => {
  let $el = $(event.target)
  if ($el.attr('class') === 'edit-list-button') {
    $el.addClass('active');
  }
});

export default ListIndexItem;
