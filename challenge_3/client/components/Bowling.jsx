import React, { Component } from 'react';
import BowlingHeader from './BowlingHeader.jsx';
import BowlingNumbers from './BowlingNumbers.jsx';
import BowlingFrames from './BowlingFrames.jsx';

class Bowling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollValue: '',
    };
  }

  render() {
    const { rollValue } = this.state;
    return (
      <div>
        <BowlingHeader />
        <div style={{
          textAlign: 'center'
        }}>
          <BowlingNumbers
            rollValue={rollValue}
            handlePinsEntryChange={this.handlePinsEntryChange}
          />
        </div>
      </div>
    );
  }
}

export default Bowling;
