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
    const { title } = this.props.track;

    // onClick={this.handleClick}
    return (
      <div className="track-index-item">
        <div className="index-item-info">
          <span className="index-item-title">{title}</span>
        </div>
      </div>
    );
  }
}

export default IndexItem;
