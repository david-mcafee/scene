import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = ({users, comments}, OwnProps) => {
  console.log(users);
  return(
    {
      selectedUserPageUser: users.selectedUserPageUser
      // comments: comments
    }
  );
};


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
