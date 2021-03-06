import { connect } from 'react-redux';
import TaskIndexItem from './task_index_item';
import { fetchTask, selectTask, destroyTask } from '../../../actions/task_actions';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTask: id => dispatch(fetchTask(id)),
  selectTask: id => dispatch(fetchTask(id)),
  destroyTask: id => dispatch(destroyTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndexItem);
