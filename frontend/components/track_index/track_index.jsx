// NOTE: presentational component

import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    // NOTE: request tracks from API
    this.tracks = this.requestTracks();
  }

  render() {
    return(
      <div>
        <h1>tracks: </h1>
        {this.tracks.map(track => (
          <TrackIndexItem track={track} key={track.id} />
        ))}
      </div>
    );
  }
}
