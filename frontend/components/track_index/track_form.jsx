import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: "",
      audio_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.upload1 = this.upload1.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = this.state;
    this.props.processForm(track);
  }

  upload(e){
    e.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) {
        this.setState({
          ["audio_url"]: results[0].url
        });
      }
      // console.log(this);
    }.bind(this)
    );
  }

  upload1(e){
    e.preventDefault();
    // console.log(e.currentTarget.value);

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) {
        // upload successfull
        // debugger;

        this.setState({
          ["image_url"]: results[0].url
        });
      }
      // console.log(this);
    }.bind(this)
    );
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      console.log(this.props.errors);
      return(
        <ul className="errors">
          Whoops!
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              { error }
            </li>
          ))}
        </ul>
      );
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={ this.handleSubmit } className="login-form-box">
          <div className="login-form">
            <label>
              <input
                type="text"
                placeholder="title"
                value={ this.state.title }
                onChange={ this.update("title")}
                className="login-input"
              />
            </label>
            <br />
            <button onClick={this.upload1} className="input-button" value="image_url">add image optional</button>
            <button onClick={this.upload} className="input-button" value="audio_url">add audio required</button>
            <br />

            <input type="submit" value="ADD TRACK" className="input-button-solid"/>

          </div>
        </form>
      </div>
    );
  }
}

export default TrackForm;
