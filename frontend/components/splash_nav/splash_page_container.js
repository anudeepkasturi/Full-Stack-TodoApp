import { connect } from 'react-redux';
import SplashPage from './splash_page';
import { guestLogin } from '../../actions/session_actions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = ( dispatch ) => ({
  guestLogin: () => dispatch(guestLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
