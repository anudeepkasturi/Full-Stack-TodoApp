import { connect } from 'react-redux';
import TasksIndex from './tasks_index';

const mapStateToProps = state => ({
  tasks: state.tasks,
  errors: state.errors.task
});

const mapDispatchToProps = ({ dispatch }) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
