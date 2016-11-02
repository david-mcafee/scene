// NOTE: passes as props to the presentational component currentUser from the state
// and the logout action creator to props

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav.jsx';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
