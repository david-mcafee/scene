import React from 'react';
import TrackIndexContainer from '../track_index/track_index_container';
import { hashHistory } from 'react-router';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("user-componentDidMount");
  }

  render() {
    return(
      <div className="user-page">

        <header className="clearfix">
          <p>artist</p>
          <p>location</p>
        </header>

        <section className="col col-2-3">
          <ul>
            <TrackIndexContainer props={this.props}/>
            <li>track</li>
            <li>track</li>
            <li>track</li>
            <li>track</li>
            <li>track</li>
          </ul>
        </section>

        <section className="col col-1-3">
          <ul>
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
            <li>comment</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default UserPage;
