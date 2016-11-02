import React from 'react';
import { Link, withRouter } from 'react-router';


// NOTE: state will be governed by user interface
// NOTE: review this model

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
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
    this.props.processForm({user});
  }

  // NOTE: need to set user manually
  // need to set "form type" (see props in container if you don't understand)
  // "processForm" with the info;

  guestLogin(e){
    e.preventDefault();
    const user = {username: "Guest", password: "password"};
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead?</Link>;
    } else {
      return <Link to="/login">log in instead?</Link>;
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          you are going to {this.props.formType}
          <br />
          {this.navLink()}
          <div className="login-form">
            <br/>

            <div className="errors">
              {this.renderErrors()}
            </div>

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

            <input type="submit" value="submit" />

          </div>
        </form>

        {this.props.formType === "login" ?
          <button onClick={this.guestLogin.bind(this)}>demo</button> : <p></p>}

      </div>
    );
  }

}

export default withRouter(SessionForm);
