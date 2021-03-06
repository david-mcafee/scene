import React from 'react';
import HomeIndexItem from './home_index_item';
// import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    return(
      <div className="home">
        <ul className="artist-list">
          {this.props.users ?
            this.props.users.map(user => (
                <HomeIndexItem key={user.id} user={user}/>
            ))
          :
            <p>all users</p>
          }
        </ul>
      </div>
    );
  }

}

export default Home;
