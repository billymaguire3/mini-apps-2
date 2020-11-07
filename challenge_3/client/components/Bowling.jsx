import React, { Component } from 'react';
import BowlingHeader from './BowlingHeader.jsx';
import BowlingNumbers from './BowlingNumbers.jsx';
import BowlingFrames from './BowlingFrames.jsx';

class Bowling extends Component {
  render() {
    return (
      <div>
        <BowlingHeader />
        <div style={{
          textAlign: 'center'
        }}>
          <BowlingNumbers />
        </div>
      </div>
    );
  }
}

export default Bowling;
