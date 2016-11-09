import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = ({users}, OwnProps) => {
  console.log(users);
  return(
    {
      selectedUserPageUser: users.selectedUserPageUser
    }
  );
};


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
