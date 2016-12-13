import React from 'react';
import TrackIndexContainer from '../track_index/track_index_container';
import { hashHistory } from 'react-router';
import CommentsContainer from '../comments/comments_container';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetSelectedUser();
  }

  render() {
    return(
      <div className="user-page">
        {this.props.selectedUserPageUser ?
          <div>
            <header className="user-page-header clearfix">
              <div className="user-page-header">
                  <div className="banner-picture"></div>
                  <img
                    className="profile-picture"
                    src={this.props.selectedUserPageUser.banner_url}>
                  </img>

                  <div className="artist-info">
                    <h1 className="artist-info-name">{this.props.selectedUserPageUser.username}</h1>
                    <h6 className="artist-info-age">member for {this.props.selectedUserPageUser.age}</h6>
                  </div>
              </div>
            </header>

            <section className="temp-track-container">
              <TrackIndexContainer />
            </section>


          </div>
        :
            <p></p>
        }

      </div>
    );
  }
}

export default UserPage;
