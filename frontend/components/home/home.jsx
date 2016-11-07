import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }


  render() {
    return(
      <div className="home">
        <ul className="artist-list">
          <p>artists:</p>
          <li className="artist-box">
            <p>artist1</p>
          </li>
          <li className="artist-box">
            <p>artist2</p>
          </li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Home);
