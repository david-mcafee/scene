import React from 'react';
import ReactPlayer from 'react-player';
import Duration from './Duration';

import { Link, withRouter } from 'react-router';


class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.current_song_url,
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
    console.log(nextProps.current_song_url);
    this.setState({ ["url"]: nextProps.current_song_url, ["playing"]: true });

  }

  playPause() {
    // debugger;
    this.setState({ ["playing"]: !this.state.playing });
  }

  stop() {
    this.setState({ ["url"]: null, ["playing"]: false });
  }

  setVolume(e) {
    this.setState({ ["volume:"]: parseFloat(e.target.value) });
  }

  onSeekMouseDown(e) {
    this.setState({ ["seeking"]: true });
  }

  onSeekChange(e) {
    this.setState({ ["played:"]: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ ["seeking"]: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  onProgress(state) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(this.state);
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

  render() {
    // debugger;
    return(

      <div className="player-div">
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
            <li>
                <button className="input-button" onClick={this.stop}>Stop</button>
                <button className="input-button" onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
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
            <li>
              <p>Played</p>
              <progress max={1} value={this.state.played} />
            </li>
            <li>
              <p>Loaded</p>
              <progress max={1} value={this.state.loaded} />
            </li>
          </ul>
        </section>

        <section className="player-track-info-box">
          <p>artist name</p>
          <p>song name</p>
          <button onClick={ () => {
              return(this.setState(
                {
                  ["url"]: "http://res.cloudinary.com/localscene/video/upload/v1478286295/jsforvaw9qxnt2zu5lkm.mp3"
                }
            ) );
          }
          }>TEST SONG</button>
        </section>


      </div>
    );
  }

}

export default (Player);
