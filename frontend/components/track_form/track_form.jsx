import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.selectedTrack.id,
      title: this.props.selectedTrack.title,
      image_url: this.props.selectedTrack.image_url,
      audio_url: this.props.selectedTrack.audio_url
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.upload1 = this.upload1.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        ["id"]: nextProps.selectedTrack.id,
        ["title"]: nextProps.selectedTrack.title,
        ["image_url"]: nextProps.selectedTrack.image_url,
        ["audio_url"]: nextProps.selectedTrack.audio_url
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = this.state;
      this.props.processForm(this.props.currentUser.id ,track);
  }

  upload(e){
    e.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) {
        this.setState({
          ["audio_url"]: results[0].url
        });
      }
    }.bind(this)
    );
  }

  upload1(e){
    e.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) {

        this.setState({
          ["image_url"]: results[0].url
        });
      }
    }.bind(this)
    );
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
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
        <form onSubmit={ this.handleSubmit } className="track-form-box">

          {this.props.formType === "postTrack" ?
            <div className="login-form">
              <p>{this.props.formDescription}</p>
              <label>
                <input
                  type="text"
                  placeholder="song title"
                  value={ this.state.title }
                  onChange={ this.update("title")}
                  className="login-input"
                />
              </label>
              <br />
              <button onClick={this.upload1} className="input-button" value="image_url">add image optional</button>
              <button onClick={this.upload} className="input-button" value="audio_url">add audio required</button>
              <br />

              <input type="submit" value={this.props.formDescription} className="input-button-solid"/>

            </div>
          :
            <div className="login-form">
              <p>{this.props.formDescription}</p>
              <label>
                <input
                  type="text"
                  placeholder="song title"
                  value={ this.state.title }
                  onChange={ this.update("title")}
                  className="login-input"
                />
              </label>
              <br />
              <button onClick={this.upload1} className="input-button" value="image_url">add image optional</button>
              <button onClick={this.upload} className="input-button" value="audio_url">add audio required</button>
              <br />

              <input type="submit" value={this.props.formDescription} className="input-button-solid"/>

            </div>
          }

        </form>
      </div>
    );
  }
}

export default TrackForm;
