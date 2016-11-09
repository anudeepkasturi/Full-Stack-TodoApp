import { connect } from 'react-redux';
import ListIndexItem from './list_index_item';
import { fetchTasks } from '../../../actions/task_actions';
import {
  selectList,
  destroyList,
  updateList
} from '../../../actions/list_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTasks: id => dispatch(fetchTasks(id)),
  selectList: id => dispatch(selectList(id)),
  destroyList: id => dispatch(destroyList(id)),
  updateList: list => dispatch(updateList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);
