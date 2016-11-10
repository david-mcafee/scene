import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // NOTE: follow this from container if you forget
    // this call will be asyncronous, meaning page will load before this
    // is complete
    // this.props.requestUserTracks(this.props.selectedUser.id);
  }

  // {this.props.comments ? this.props.comments.map(comment => (
  //   comment.id ?
  //     <CommentIndexItem
  //       playcomment={ this.props.playcomment }
  //       comment={comment}
  //       key={comment.id}
  //       deletecomment={this.props.deletecomment}
  //       selectedUserPageUser={this.props.selectedUserPageUser}/>
  //     :
  //     <p></p>
  // )) : <p>all comments</p>}

  render() {
    // console.log(this.props.selectedTrack);

    return(
      <div>

        <h1>comments: </h1>

      </div>
    );
  }
}

export default CommentIndex;
