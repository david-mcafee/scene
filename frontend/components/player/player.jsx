import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ReactPlayer url='http://res.cloudinary.com/localscene/video/upload/v1478394001/qldmkxhlwet9fh5kjvqf.mp3' playing />
    );
  }
}

export default Player;
