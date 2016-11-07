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
        <p>artists:</p>
      </div>
    );
  }

}

export default withRouter(Home);
