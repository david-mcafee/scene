import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  // bind to this, so that this is the react component so that
  // we can refer to it's props

  upload(e){
    e.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) {
        // upload successfull
        this.props.postTrack(results[0].url);
      }
      }
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.upload}>upload track</button>
      </div>
    );
  }
}

export default UploadButton;
