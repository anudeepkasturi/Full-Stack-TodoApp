import { connect } from 'react-redux';
import NewTask from './new_task';
import { createTask } from '../../../actions/task_actions';


const mapStateToProps = state => ({
  user_id: state.session.currentUser.id,
  list: state.list
});

const mapDispatchToProps = ( dispatch ) => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
