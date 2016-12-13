import React from 'react';
import { Link, hashHistory } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Link to={`/users/${this.props.user.id}`}>
        <div className="artist-list-item">
          <img src={this.props.user.banner_url}></img>
          <div className="home-index-item-name">
            {this.props.user.username}
          </div>
        </div>
      </Link>
    );
  }

}

export default HomeIndexItem;
