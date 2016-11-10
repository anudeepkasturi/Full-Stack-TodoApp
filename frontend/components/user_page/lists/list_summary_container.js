import { connect } from 'react-redux';
import ListSummary from './list_summary';

const mapStateToProps = state => ({
  list: state.list,
  lists: state.lists
});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSummary);
