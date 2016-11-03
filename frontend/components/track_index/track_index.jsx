import React from 'react';
import TrackIndexItem from './track_index_item';
import UploadButton from './upload_button';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // NOTE: follow this from container if you forget
    // this call will be asyncronous, meaning page will load before this
    // is complete
    this.props.requestTracks();
  }

  render() {
    return(
      <div>
        <UploadButton postTrack={this.postTrack}/>

        <h1>tracks: </h1>
        {this.props.tracks ? this.props.tracks.map(track => (
          <TrackIndexItem track={track} key={track.id} />
        )) : <p>all tracks</p>}
      </div>
    );
  }
}

export default TrackIndex;
