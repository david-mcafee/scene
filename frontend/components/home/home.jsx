import React from 'react';
import HomeIndexItem from './home_index_item';
// import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
    // debugger;
  }

  // <h1>tracks: </h1>
  // {this.props.tracks ? this.props.tracks.map(track => (
  //   track.id ?
  //     <TrackIndexItem
  //       playTrack={ this.props.playTrack }
  //       track={track}
  //       key={track.id}
  //       deleteTrack={this.props.deleteTrack}/>
  //     :
  //     <p></p>
  // )) : <p>all tracks</p>}


  render() {
    // debugger;
    return(
      <div className="home">
        <ul className="artist-list">
          {this.props.users ?
            this.props.users.map(user => (
              user.id ?
                <HomeIndexItem key={user.id} user={user}/>
              :
                <p></p>
            ))
          :
            <p>all users</p>
          }
        </ul>
      </div>
    );
  }

}

export default Home;
