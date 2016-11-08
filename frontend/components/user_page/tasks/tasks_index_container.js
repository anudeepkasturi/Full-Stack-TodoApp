import { connect } from 'react-redux';
import TasksIndex from './tasks_index';
import { fetchTasks } from '../../../actions/task_actions';

const mapStateToProps = state => ({
  tasks: state.tasks,
  errors: state.errors.task
});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTasks: () => dispatch(fetchTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
