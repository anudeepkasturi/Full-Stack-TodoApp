import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

import ListIndexItemContainer from './list_index_item_container';

class ListsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      form: { title: "" },
      errors: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  closeModal() {
    this.setState({ modalOpen: false, form: { title: "" }});
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.errors = "";
    const list = this.state.form;
    if (list.title === "") {
      this.state.errors = "List name cannot be blank";
    } else {
      this.closeModal();
      this.props.createList({ list });
    }
  }

  updateField() {
    return (e) => this.setState({
      form: { title: e.currentTarget.value }
    });
  }

  render () {
    let { lists } = this.props;
    let { title } = this.state.form;

    return (
      <div>

        <div className="list-header">
          <h3>Lists</h3>
          <button onClick={this.openModal}>+</button>
        </div>

        <ul>
          <li key="0" className="list-inbox-item">
            <Link to="/home">Inbox</Link>
          </li>

          {Object.keys(lists).map(listId => (
            <ListIndexItemContainer
              id={listId}
              title={lists[listId].title}
              key={listId}/>
          ))}
        </ul>


      <Modal isOpen={ this.state.modalOpen }
        onRequestClose={ this.closeModal }
        className="ModalClass" >
        <div className="modal-div">
          <h2>Add a list</h2>
          <form onSubmit={ this.handleSubmit }>
            <div className="input">
              <label>Please enter a new list name:
                <input
                  type="text"
                  value={ title }
                  className="input-text"
                  onChange={this.updateField()}>
                </input>
              </label>
            </div>

            <div className="buttons">
              <input type="submit" value="Add"></input>
              <button onClick={this.closeModal}>Cancel</button>
            </div>
            <p>{this.state.errors}</p>

          </form>
        </div>
      </Modal>
      </div>
    );
  }
}

export default ListsIndex;
