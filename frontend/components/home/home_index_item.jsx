import React from 'react';
import { Link, hashHistory } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.user);
  }



  render() {
    return(
      <div className="artist-list-item">
        <Link to={`/users/${this.props.user.id}`}>
          <img src={this.props.user.banner_url}>

          </img>
        </Link>
        <div className="home-index-item-name">
          {this.props.user.username}
        </div>
      </div>
    );
  }

}

export default HomeIndexItem;
