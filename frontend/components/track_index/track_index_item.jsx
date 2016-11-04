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

  editTrack (id) {
    return (e) => {
      e.preventDefault();
      const url = `/tracks/${id}/edit`;
      hashHistory.push(url);
    };
  }

  render () {
    const { id, title, age, image_url, audio_url, user_id} = this.props.track;

    // onClick={this.handleClick}
    return (
      <div className="track-index-item">
        <ul className="index-item-info">
          <li className="index-item-image-url"><img className="album-art"src={image_url}></img></li>
          <li className="index-item-title">{title}</li>
          <li className="index-item-user-id">Artist: {user_id}</li>
          <li className="index-item-age">uploaded {age} ago</li>
        </ul>
        <button className="input-button-solid" onClick={ this.editTrack(id) }>EDIT</button>
        <button className="input-button-solid" onClick={ () => this.props.deleteTrack(id) }>DELETE</button>
      </div>
    );
  }
}

export default IndexItem;
