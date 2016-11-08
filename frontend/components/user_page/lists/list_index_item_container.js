import { connect } from 'react-redux';
import ListIndexItem from './list_index_item';
import { fetchTasks } from '../../../actions/task_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTasks: id => dispatch(fetchTasks(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);
