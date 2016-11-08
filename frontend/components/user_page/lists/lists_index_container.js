import { connect } from 'react-redux';
import {
  createList,
  destroyList,
  updateList,
  fetchLists
} from '../../../actions/list_actions';
import { clearErrors } from '../../../actions/error_actions';
import ListsIndex from './lists_index';

const mapStateToProps = (state) => ({
  lists: state.lists,
  errors: state.errors.list
});

const mapDispatchToProps = ( dispatch ) => ({
  createList: (list) => dispatch(createList(list)),
  clearErrors: () => dispatch(clearErrors('list')),
  fetchLists: () => dispatch(fetchLists())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndex);
