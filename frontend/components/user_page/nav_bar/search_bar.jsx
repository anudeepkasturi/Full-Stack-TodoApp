import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };

    this.redirectToSearch = this.redirectToSearch.bind(this);
  }

  redirectToSearch() {
    console.log(this.props);
    this.props.router.push('/search');
  }

  updateField() {
    return(e) => {
      this.setState({ search: e.currentTarget.value }, () => {
        this.props.query(this.state);
      });
    };
  }

  render () {
    return (
      <div className="search-bar">
        <input
          type='text'
          placeholder="Search tasks..."
          onFocus={ this.redirectToSearch }
          onChange={ this.updateField() }
          value={ this.state.search }
          >

        </input>
      </div>
    );
  }
}

export default withRouter(SearchBar);
