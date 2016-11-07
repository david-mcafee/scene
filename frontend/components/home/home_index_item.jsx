import React from 'react';
import { Link, hashHistory } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-index-item">
        <ul className="home-index-item-info">
          <li className="home-index-item-name">
            <Link to={`/users/${this.props.user.id}`}>
              {this.props.user.username}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomeIndexItem;
