import { connect } from 'react-redux';
import Home from './home';
import {
  receiveUsers,
  requestUsers } from '../../actions/user_actions';

import { getAllUsers } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  // debugger;
  return(
    {
      users: getAllUsers(state)
    }
  );
};

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
