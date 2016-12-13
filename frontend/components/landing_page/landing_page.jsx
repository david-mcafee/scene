import React from 'react';
// import HomeIndexItem from './home_index_item';
// import { Link, withRouter } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // debugger;
    // let imageClass = `image${Math.floor(Math.random() * 10)}`;

    return(
      <div className="landing image0">
          <h1 className="landing-title">scene</h1>
          <h2 className="landing-sub-1">love music? discover your local scene</h2>
          <p className="landing-sub-2">listen to music by artists in YOUR community</p>
          <p className="landing-sub-3">upload your own original music</p>
          <p className="landing-sub-4">promote local shows</p>
          <p className="landing-sub-5">connect with local artists</p>
      </div>
    );
  }

}

export default LandingPage;
