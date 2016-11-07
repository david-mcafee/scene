import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("user page loaded");
  }

  render() {
    return(
      <div className="user-page">

        <header className="user-page-banner">
          <p>artist</p>
          <p>location</p>
        </header>

        <section className="user-page-tracks">
          <p>tracks go here</p>
        </section>

        <section className="user-page-track-comments">
          <p>comments go here</p>
        </section>
      </div>
    );
  }
}
