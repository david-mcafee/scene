import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  // bind to this, so that this is the react component so that
  // we can refer to it's props

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, tracks){
        if (error === null) {
            // upload successfull
            this.props.postImage(tracks[0].url);
        }
    }.bind(this));
  }

  render() {
    return (
      <button onClick={this.upload}>upload track</button>
    );
  }
}

export default UploadButton;
