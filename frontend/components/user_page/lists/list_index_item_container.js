import { connect } from 'react-redux';
import ListIndexItem from './list_index_item';
import { fetchTasks } from '../../../actions/task_actions';
import { selectList } from '../../../actions/list_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = ( dispatch ) => ({
  fetchTasks: id => dispatch(fetchTasks(id)),
  selectList: id => dispatch(selectList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);
