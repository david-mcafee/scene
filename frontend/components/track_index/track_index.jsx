import React from 'react';
import TrackIndexItem from './track_index_item';
import TrackForm from './track_form';

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
        <TrackForm postTrack={this.props.postTrack} processForm={this.props.processForm}/>

        <h1>tracks: </h1>
        {this.props.tracks ? this.props.tracks.map(track => (
          <TrackIndexItem track={track} key={track.id} editTrack={this.props.editTrack} deleteTrack={this.props.deleteTrack}/>
        )) : <p>all tracks</p>}
      </div>
    );
  }
}

export default TrackIndex;
