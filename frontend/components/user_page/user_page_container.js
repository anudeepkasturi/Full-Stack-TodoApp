import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
