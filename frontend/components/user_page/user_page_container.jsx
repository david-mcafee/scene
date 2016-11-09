import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = ({users}, OwnProps) => {
  console.log(users);
  console.log(OwnProps.params.user_id);
  return(
    {
      selectedUser: OwnProps.params.user_id
    }
  );
};


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
