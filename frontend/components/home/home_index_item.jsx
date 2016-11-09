import React from 'react';
import { Link, hashHistory } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.user);
  }



  render() {
    return(
      <div>
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
