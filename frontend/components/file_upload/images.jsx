import React from 'react';
import ReactDOM from 'react-dom';
import UploadButton from './components/file_upload/upload_button';
import ImageList from './components/file_upload/image_list';

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  getInitialState(){
    return{ images: [] };
  }

  componentDidMount(){
    $.get("/api/images", function(images) {
      this.setState({images: images});
    }).bind(this)
  }

  // pas in url, create object, make ajax request, with object,
  // upon success add image to list of images to we have as state
  // NOTE: CALL API UTIL HERE!!!!!!!!!!!!

  postImage(url){
    const img = {url: url};
    $.ajax({
      url: "/api/images",
      method: "POST",
      data: {image: img},
      success: function(image){
        const images = this.state.images;
        images.push(image);
        this.setState({images:images});
      }.bind(this)
    });
  }

  render(){
    return(
      <div>
        <UploadButton postImage={this.postImage}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
export default Images;
