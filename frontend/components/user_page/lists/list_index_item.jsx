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

    this.handleClick = this.handleClick.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.editList = this.editList.bind(this);

    this.closeDropdownModal = this.closeDropdownModal.bind(this);
    this.toggleDropdownModal = this.toggleDropdownModal.bind(this);
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
    this.closeDropdownModal();
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

  closeDropdownModal() {
    this.setState({ dropdownModalOpen: false, form: { title: "" }});
  }

  toggleDropdownModal() {
    this.setState({ dropdownModalOpen: !this.state.dropdownModalOpen });
  }


  render () {
    let { title, id } = this.props;
    let path = `/home/${title}`;

    this.dropdownId = `myDropdown${id}`;

    let overlayStyle = {
      overlay : {
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 0
      },
      content : {
        position          : 'absolute'
      }
    };

    return (
      <li className="list-index-item">
        <Link to={path} onClick={this.handleClick}>{ title }</Link>

        {/* dropdown Modal */}
        <div className="dropdown-modal-container">
          <button onClick={ this.toggleDropdownModal }>▼</button>

            <Modal isOpen={ this.state.dropdownModalOpen }
              onRequestClose={ this.closeDropdownModal }
              className="dropdown-modal"
              style={overlayStyle}
              >
              <div className="dropdown-content">
                <a onClick={ this.openEditListModal }>Edit</a>
                <a onClick={ this.deleteList }>Delete</a>
            </div>
            </Modal>
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

export default ListIndexItem;
