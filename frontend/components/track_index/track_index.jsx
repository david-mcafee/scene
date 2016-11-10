import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // NOTE: follow this from container if you forget
    // this call will be asyncronous, meaning page will load before this
    // is complete
    // this.props.requestUserTracks(this.props.selectedUser.id);
  }

  render() {
    // console.log(this.props.selectedTrack);

    return(
      <div>

        <h1>tracks: </h1>
        {this.props.tracks ? this.props.tracks.map(track => (
          track.id ?
            <TrackIndexItem
              playTrack={ this.props.playTrack }
              track={track}
              key={track.id}
              deleteTrack={this.props.deleteTrack}
              username={this.props.username}/>
            :
            <p></p>
        )) : <p>all tracks</p>}
      </div>
    );
  }
}

export default TrackIndex;
