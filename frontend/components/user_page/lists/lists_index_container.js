import { connect } from 'react-redux';
import ListsIndex from './lists_index';

const mapStateToProps = state => ({
  lists: state.lists,
  errors: state.errors.list
});

const mapDispatchToProps = ({ dispatch }) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndex);
