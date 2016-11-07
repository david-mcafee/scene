import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate() {
    this.props.requestUsers();
  }


  render() {
    return(
      <div className="home">
        <ul className="artist-list">
          {this.props.users ?
            this.props.users.map(user =>(
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

export default withRouter(Home);
