import React from 'react';
import ReactDOM from 'react-dom';
import UploadButton from './components/track_upload/upload_button';
import TrackList from './components/track_upload/track_list';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
  }

  getInitialState(){
    return{ tracks: [] };
  }

  componentDidMount(){
    $.get("/api/tracks", function(tracks) {
      this.setState({tracks: tracks});
    }).bind(this)
  }

  // pas in url, create object, make ajax request, with object,
  // upon success add track to list of tracks to we have as state
  // NOTE: CALL API UTIL HERE!!!!!!!!!!!!

  postImage(url){
    const img = {url: url};
    $.ajax({
      url: "/api/tracks",
      method: "POST",
      data: {track: img},
      success: function(track){
        const tracks = this.state.tracks;
        tracks.push(track);
        this.setState({tracks:tracks});
      }.bind(this)
    });
  }

  render(){
    return(
      <div>
        <UploadButton postTrack={this.postTrack}/>
        <TrackList tracks={this.state.tracks}/>
      </div>
    );
  }
}
export default Tracks;
