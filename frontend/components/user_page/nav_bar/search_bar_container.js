import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchData } from '../../../actions/search_actions';

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = ( dispatch ) => ({
  query: query => dispatch(fetchData(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
