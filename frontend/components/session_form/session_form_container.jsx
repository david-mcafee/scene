// NOTE: REMEMBER, THE CONTAINER PROVIDES PROPS TO THE PRESENTATIONAL COMPONENT

import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';



// NOTE: pass a loggedIn (boolean) prop representing whether a currentUser exists
// and an array of errors from the state
const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});


// NOTE: pass a formType prop (a string), login or signup, depending on location.pathname
// and processForm (a function), dispatchign action creators login or signup
const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processLoginForm: user => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
