import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
            // upload successfull

        }
    });
  }

  render() {
    return (
      <button onClick={this.upload}>upload image</button>
    );
  }
}

export default UploadButton;
