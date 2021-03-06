import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>

        <h1 className="tracks-header">tracks: </h1>
        {this.props.tracks ? this.props.tracks.map(track => (
          track.id ?
            <TrackIndexItem
              currentUser={ this.props.currentUser }
              playTrack={ this.props.playTrack }
              track={track}
              key={track.id}
              deleteTrack={this.props.deleteTrack}
              selectedUserPageUser={this.props.selectedUserPageUser}
              requestComments={this.props.requestComments}/>
            :
            <p></p>
        )) : <p>all tracks</p>}
      </div>
    );
  }
}

export default TrackIndex;
