import React from 'react';
import ReactPlayer from 'react-player';
import Duration from './Duration';

import { Link, withRouter } from 'react-router';


class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.currentTrackUrl,
      playing: this.props.playing,
      volume: 0.8,
      played: 0,
      loaded: 0,
      seeking: false,
      duration: 0
    };

    // NOTE: review binding to this with class
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);

    this.setVolume = this.setVolume.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.displayMessages = this.displayMessages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    console.log(nextProps.currentTrackUrl);
    this.setState({
      ["url"]: nextProps.currentTrackUrl,
      ["playing"]: true,
      ["played"]: 0,
      ["loaded"]: 0 });
  }

  playPause() {
    // debugger;
    this.setState({ ["playing"]: !this.state.playing });
  }

  stop() {
    this.setState({ ["url"]: null, ["playing"]: false });
  }

  setVolume(e) {
    this.setState({ ["volume"]: parseFloat(e.target.value) });
  }

  onSeekMouseDown(e) {
    this.setState({ ["seeking"]: true });
  }

  onSeekChange(e) {
    this.setState({ ["played"]: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ ["seeking"]: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  onProgress(nextState) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(nextState);
    }
  }

  displayMessages(messages) {
    console.log("player messages");
    return(
        <ul className="errors">
          Whoops!
          {messages.map((message, i) => (
            <li key={`message-${i}`}>
              {message}
            </li>
          ))}
        </ul>
    );
  }

  // <p>duration</p>
  // <Duration seconds={this.state.duration} />
  // <br />
  // <p>elapsed</p>
  // <Duration seconds={this.state.duration * this.state.played} />
  // <br />
  // <p>remaining</p>
  // <Duration seconds={this.state.duration * (1 - this.state.played)} />
  // <br />

  render() {
    // debugger;
    return(

      <div className="player-div">
        <progress className="loaded-progress" max={1} value={this.state.loaded} />
        <section className="player-section">
          <ReactPlayer
            ref={player => ( this.player = player )}
            className='react-player'
            width={0}
            height={0}
            url={this.state.url}
            volume={this.state.volume}
            playing={this.state.playing}
            onReady={() => this.setState({["playing"]: true}) }
            onStart={() => console.log('onStart')}
            onPlay={() => this.setState({ ["playing"]: true })}
            onPause={() => this.setState({ ["playing"]: false })}
            onBuffer={() => (this.displayMessages(["loading"]))}
            onEnded={() => this.setState({ ["playing"]: false })}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={duration => this.setState({ duration })}
          />
        </section>
        <section className="player-controls">
          <ul>
            <li className="play-button-wrapper">
                <button onClick={this.playPause}>
                  <span>
                    {this.state.playing ? '❚❚' : '►'}
                  </span>
                </button>
            </li>
            <li>
              <p>Seek</p>
              <input
                type='range' min={0} max={1} step='any'
                value={this.state.played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
            </li>
            <li>
              <p>Volume</p>
              <input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume} />
            </li>


          </ul>
        </section>

        <section className="player-track-info-box">
          <img src={this.props.current_track ? this.props.current_track.image_url : ""}></img>
          <div>
            <p className="player-track-name">{this.props.current_track ? this.props.current_track.title : ""}</p>
            <p className="player-artist-name">{this.props.current_track ? this.props.current_track.user.username : ""}</p>
          </div>
        </section>

      </div>
    );
  }

}

export default (Player);
