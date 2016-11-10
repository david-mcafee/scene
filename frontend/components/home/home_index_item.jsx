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
          <ul className="home-index-item-info">
            <li className="home-index-item-name">
              {this.props.user.username}
            </li>
          </ul>

        </Link>
      </div>
    );
  }

}

export default HomeIndexItem;
