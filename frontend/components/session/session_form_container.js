import { connect } from 'react-redux';
import { login, signup, guestLogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: session.currentUser ? true : false,
  errors: errors.session
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ?
    login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    guestLogin: () => dispatch(guestLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
