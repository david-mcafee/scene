import React from 'react';
import TrackIndexContainer from '../track_index/track_index_container';
import { hashHistory } from 'react-router';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("user-componentDidMount");
  }

  render() {
    return(
      <div className="user-page">

        <header className="clearfix">
          <div className="banner">

          </div>
          <img className="profile-picture" src={this.props.selectedUser.banner_url}>

          </img>
          <div className="artist-info">
            <h1>{this.props.selectedUser.username}</h1>
            <h4>{this.props.selectedUser.username}</h4>
            <h6>member since {this.props.selectedUser.created_at}</h6>
          </div>
        </header>

        <section className="col col-2-3">
          <ul>
            <TrackIndexContainer />
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
