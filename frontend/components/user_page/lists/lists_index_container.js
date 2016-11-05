import { connect } from 'react-redux';
import ListsIndex from './lists_index';
import {
  createList,
  destroyList,
  updateList
} from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
// debugger;
  return ({

    lists: state.lists,
    errors: state.errors.list
  });
};

const mapDispatchToProps = ({ dispatch }) => ({
  createList: () => dispatch(createList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndex);
