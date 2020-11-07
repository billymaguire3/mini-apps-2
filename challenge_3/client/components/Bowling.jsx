import React, { Component } from 'react';
import BowlingHeader from './BowlingHeader.jsx';
import BowlingNumbers from './BowlingNumbers.jsx';
import Scoreboard from './Scoreboard.jsx';
import BowlingFrames from './BowlingFrames.jsx';

class Bowling extends Component {
  render() {
    this.state = {

    };
    return (
      <div>
        <BowlingHeader />
        <div style={{
          textAlign: 'center'
        }}>
          <Scoreboard />
          <BowlingFrames />
          <BowlingNumbers />
        </div>
      </div>
    );
  }
}

export default Bowling;
