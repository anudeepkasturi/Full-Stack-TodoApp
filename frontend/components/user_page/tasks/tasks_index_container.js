import { connect } from 'react-redux';
import TasksIndex from './tasks_index';
import { fetchTasks } from '../../../actions/task_actions';

const mapStateToProps = state => ({
  tasks: state.tasks,
  errors: state.errors.task,
  list: state.list
});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTasks: (listId) => dispatch(fetchTasks(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
