// NOTE: passes as props to the presentational component currentUser from the state
// and the logout action creator to props

import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
