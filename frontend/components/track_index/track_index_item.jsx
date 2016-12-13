import React from 'react';
import { hashHistory } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.editTrack = this.editTrack.bind(this);
  }


  editTrack (id) {
    return (e) => {
      e.preventDefault();
      const url = `/tracks/${id}/edit`;
      hashHistory.push(url);
    };
  }

// <li className="index-item-user-id">{this.props.username}</li>
// <button className="input-button-solid" onClick={
//     () => {
//             // console.log("comments callback entered");
//             debugger;
//             return(
//               this.props.requestComments(id)
//             );
//           }
// }>COMMENTS</button>

  render () {
    const { id, title, age, image_url, audio_url, user_id, user} = this.props.track;
    // onClick={this.handleClick}
    return (
      <div className="track-index-item">

        <div className="track-section-left">
          <img className="album-art"src={image_url}></img>
        </div>

        <div className="track-section-center">
          <ul className="index-item-info">
            <button className="input-button" onClick={ () => {
                // nameToDisplay = state.users.selectedUserPageUser.username;
                return(
                  this.props.playTrack(this.props.track, this.props.selectedUserPageUser.username)
                );
              } }>PLAY</button>
            <li className="index-item-title">{title}</li>
            <li className="index-item-user-id">{this.props.selectedUserPageUser.username}</li>
          </ul>
        </div>

        <div className="track-section-right">
          <ul>
            <li>
              <div className="edit-buttons">


                { this.props.track.user_id === this.props.currentUser.id ?
                    <div>
                      <button className="input-button-solid" onClick={ this.editTrack(this.props.track.id) }>EDIT</button>
                      <button className="input-button-solid" onClick={ () => this.props.deleteTrack(id) }>DELETE</button>
                    </div>
                  :
                    <div></div>
                }

        </div>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default IndexItem;
