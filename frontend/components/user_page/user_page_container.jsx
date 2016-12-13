import { connect } from 'react-redux';
import UserPage from './user_page';
import { resetSelectedUser } from '../../actions/user_actions';

const mapStateToProps = ({users, comments}, OwnProps) => {
  return(
    {
      selectedUserPageUser: users.selectedUserPageUser
    }
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    resetSelectedUser: () => dispatch(resetSelectedUser())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
