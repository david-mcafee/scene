import React from 'react';
import { hashHistory } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   const trackId = this.props.track.id;
  //   hashHistory.push(`benches/${benchId}`);
  // }

  render () {
    const { title, age, image_url, audio_url, user_id} = this.props.track;

    // onClick={this.handleClick}
    return (
      <div className="track-index-item">
        <div className="index-item-info">
          <span className="index-item-title">{title}</span>
          <span className="index-item-user-id">Artist: {user_id}</span>
          <span className="index-item-audio-url">{audio_url}</span>
          <span className="index-item-image-url">{image_url}</span>
          <span className="index-item-age">uploaded {age} ago</span>
        </div>
      </div>
    );
  }
}

export default IndexItem;
