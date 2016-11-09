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
    // console.log(this.props.selectedTrack);

    return(
      <div>
        <TrackForm
          formType={this.props.formType}
          processForm={this.props.processForm}
          selectedTrackId={this.props.selectedTrackId}
          selectedTrack={this.props.selectedTrack}/>

        <h1>tracks: </h1>
        {this.props.tracks ? this.props.tracks.map(track => (
          track.id ?
            <TrackIndexItem
              playTrack={ this.props.playTrack }
              track={track}
              key={track.id}
              deleteTrack={this.props.deleteTrack}/>
            :
            <p></p>
        )) : <p>all tracks</p>}
      </div>
    );
  }
}

export default TrackIndex;
