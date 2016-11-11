import React from 'react';

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);

    // use post in store if updating; start with blank post if new
    // this.props.track ||

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
    // You don't have to do this check first, but it can help prevent an unneeded render
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
    // debugger;
    e.preventDefault();
    const track = this.state;
      this.props.processForm(track);
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState(newProps.track || { title: "", image_url: "", audio_url: ""});
  // }

  upload(e){
    e.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if (!error) {
        // console.log(results);
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
      // console.log(this.props.errors);
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
              <p>{this.props.formType}</p>
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

              <input type="submit" value={this.props.formType} className="input-button-solid"/>

            </div>
          :
            <div className="login-form">
              <p>{this.props.formType}</p>
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

              <input type="submit" value={this.props.formType} className="input-button-solid"/>

            </div>
          }

        </form>
      </div>
    );
  }
}

export default CommentsForm;
