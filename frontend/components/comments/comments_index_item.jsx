import React from 'react';
import { hashHistory } from 'react-router';

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.editcomment = this.editcomment.bind(this);
  }


  // editComment (id) {
  //   return (e) => {
  //     e.preventDefault();
  //     const url = `/comments/${id}/edit`;
  //     hashHistory.push(url);
  //   };
  // }

            // <li className="index-item-user-id">{this.props.username}</li>


            // <button className="input-button-solid" onClick={ this.editcomment(id) }>EDIT</button>
            // <button className="input-button-solid" onClick={ () => this.props.deleteComment(id) }>DELETE</button>

  render () {

    // onClick={this.handleClick}
    return (
      <div className="comment-index-item">
        <ul>
          <li>{this.props.comment.body}</li>
          <li>{this.props.comment.user_id}</li>
          <li>{this.props.comment.age}</li>
        </ul>
        <div className="edit-buttons">
        </div>

      </div>
    );
  }
}

export default CommentsIndexItem;
