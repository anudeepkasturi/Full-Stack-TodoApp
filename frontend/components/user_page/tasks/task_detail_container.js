import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import { updateTask } from '../../../actions/task_actions';

const mapStateToProps = state => ({
  task: state.task,
  user_id: state.session.currentUser.id
});

const mapDispatchToProps = ( dispatch ) => ({
  updateTask: task => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
