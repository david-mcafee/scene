import React from 'react';
import ReactPlayer from 'react-player';
import Duration from './Duration';

import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

  }

  playPause() {
    this.setState({ playing: !this.state.playing });
  }
  stop() {
    this.setState({ url: null, playing: false });
  }

  render() {

    return(
      <div className="player-div">
        <section className="player-section">
          <ReactPlayer
            className='react-player'
            width={800}
            height={30}
            url={this.props.url}
            volume={this.props.volume}
            playing={this.props.playing}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={() => this.setState({ playing: true })}
            onPause={() => this.setState({ playing: false })}
            onBuffer={() => console.log('onBuffer')}
            onEnded={() => this.setState({ playing: false })}
            onError={e => console.log('onError', e)}
            onDuration={duration => this.setState({ duration })}
          />

          <table><tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.playPause}>{this.playing ? 'Pause' : 'Play'}</button>
              </td>
            </tr>

            <tr>
              <th>Played</th>
              <td><progress max={1} value={this.props.played} /></td>
            </tr>
            <tr>
              <th>Loaded</th>
              <td><progress max={1} value={this.props.loaded} /></td>
            </tr>
          </tbody></table>
        </section>

        <section>
          <button onClick={() => this.setState({ url: 'http://res.cloudinary.com/localscene/video/upload/v1478286295/jsforvaw9qxnt2zu5lkm.mp3' })}>TEST SONG</button>
        </section>

        <section className="state">

        </section>
      </div>
    );
  }

}

export default withRouter(SessionForm);
