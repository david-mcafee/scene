import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


// NOTE: state will be governed by user interface
// NOTE: review this model

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        email: "",
        banner_url: "",
        artist: "false"
    };
    // NOTE: review from React curriculum
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // NOTE: invoke the processForm PROP when the submit button is clicked
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    // this.props.artist === "true" ? true : false;
    this.props.processForm({user});
  }

  // NOTE: need to set user manually
  // need to set "form type" (see props in container if you don't understand)
  // "processForm" with the info;

  guestLogin(e){
    e.preventDefault();
    const user = {username: "Guest", password: "password"};
    hashHistory.push("login");
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">don't have an account?<br/>sign up instead!</Link>;
    } else {
      return <Link to="/login">already have an account?<br/>log in instead!</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      console.log(this.props.errors);
      return(
          <ul className="errors">
            Whoops!
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
          );
    }
  }

  render() {
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.navLink()}

          {this.props.formType === "signup" ?

            <div className="login-form">
              <br/>

              {this.renderErrors()}

              <label>
                <input
                  type="text"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input" />
              </label>
              <br/>
              <label>
                <input
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input" />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"/>
              </label>
              <br />
              <label>
                <input
                  type="text"
                  placeholder="banner url  (optional)"
                  value={this.state.banner_url}
                  onChange={this.update("banner_url")}
                  className="login-input"/>
              </label>
              <br />
              <br />
                <input type="radio" name={this.state.artist} value="false" onChange={this.update("artist")} checked={this.state.artist==="false"}/>fan     <input type="radio" name={this.state.artist} value="true" onChange={this.update("artist")} checked={this.state.artist==="true"}/>artist    <em className="required">(required)</em>
              <br />
              <br />

              <input type="submit" value="submit" className="input-button"/>
              <Link onClick={this.guestLogin.bind(this)} className="input-button-solid">DEMO ACCOUNT</Link>
            </div>

          :

            <div className="login-form">
              <br/>

              {this.renderErrors()}

              <label>
                <input
                  type="text"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input" />
              </label>
              <br/>
              <label>
                <input
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input" />
              </label>
              <br />
              <br />
              <input type="submit" value="submit" className="input-button"/>
              <button onClick={this.guestLogin.bind(this)} className="input-button-solid">DEMO ACCOUNT</button>

            </div>

          }

        </form>



      </div>
    );
  }

}

export default withRouter(SessionForm);
