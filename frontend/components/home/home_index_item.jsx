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
          <img src="https://s-media-cache-ak0.pinimg.com/236x/a7/7e/3d/a77e3d34eb1a05f7bc930d3f719c0846.jpg">

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
