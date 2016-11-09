import React from 'react';
import { Link, hashHistory } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.user);
  }

  // <li className="home-index-item-image">
  //   <Link to={`/users/${this.props.user.id}`}>
  //     {this.props.user.banner_url}
  //   </Link>
  // </li>

  render() {
    return(
      <ul className="home-index-item-info">
        <li className="home-index-item-name">
          <Link to={`/users/${this.props.user.id}`}>
            {this.props.user.username}
          </Link>
        </li>

      </ul>
    );
  }

}

export default HomeIndexItem;
