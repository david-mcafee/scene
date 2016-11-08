import React from 'react';
import TrackIndexContainer from '../track_index/track_index_container';

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

        <header className="user-page-banner">
          <p>artist</p>
          <p>location</p>
        </header>

        <section className="user-page-tracks">
          <p>tracks</p>
          // <TrackIndexContainer />
        </section>

        <section className="user-page-track-comments">
          <p>comments go here</p>
        </section>
      </div>
    );
  }
}
