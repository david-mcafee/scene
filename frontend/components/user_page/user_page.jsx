import React from 'react';
import TrackIndexContainer from '../track_index/track_index_container';
import { hashHistory } from 'react-router';
import CommentsContainer from '../comments/comments_container';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("user-componentDidMount");
  }


  render() {
    return(
      <div className="user-page">
        {this.props.selectedUserPageUser ?
          <div>

            <header className="user-page-header clearfix">
              <div className="user-page-header">
                  <img
                    className="banner-picture"
                    src="http://res.cloudinary.com/localscene/image/upload/v1478727789/banner_bqnwe6.jpg">
                  </img>
                  <img
                    className="profile-picture"
                    src="https://s-media-cache-ak0.pinimg.com/236x/a7/7e/3d/a77e3d34eb1a05f7bc930d3f719c0846.jpg">
                  </img>

                  <div className="artist-info">
                    <h1 className="artist-info-name">{this.props.selectedUserPageUser.username}</h1>
                    <h6 className="artist-info-age">member for {this.props.selectedUserPageUser.age}</h6>
                  </div>
              </div>
            </header>

            <section className="col col-2-3">
              <TrackIndexContainer />
            </section>

            <section className="col col-1-3">
              <CommentsContainer/>
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
