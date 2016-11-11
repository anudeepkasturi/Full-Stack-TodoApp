import { connect } from 'react-redux';
import ListSummary from './list_summary';

const mapStateToProps = state => ({
  summary: state.tasks.index_summary
});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSummary);
