import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = (state, OwnProps) => ({
  selectedUser: OwnProps.params.user_id
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
