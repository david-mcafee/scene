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
        console.log(results);
        // debugger;
        this.props.postTrack(results[0].url);
      }
    }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <p>Form goes here</p>
        <button onClick={this.upload}>upload track</button>
      </div>
    );
  }
}

export default UploadButton;
