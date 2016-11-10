import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestComments(1);
    // debugger;
  }



  render() {
    // console.log('comments');
    // console.log(this.props.comments);

    return(
      <div>
        <h4>COMMENTS</h4>
          {this.props.comments ? this.props.comments.map(comment => (
            comment.id ?
              <CommentIndexItem
                playcomment={ this.props.playcomment }
                comment={comment}
                key={comment.id}
                deletecomment={this.props.deletecomment}
                selectedUserPageUser={this.props.selectedUserPageUser}/>
              :
              <p></p>
          )) : <p>all comments</p>}
      </div>
    );
  }
}

export default CommentIndex;
