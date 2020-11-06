import React, { Component } from 'react';
import BowlingHeader from './BowlingHeader.jsx';
import BowlingNumbers from './BowlingNumbers.jsx';

class Bowling extends Component {
  render() {
    return (
      <div>
        <BowlingHeader />
        <BowlingNumbers />
      </div>
    );
  }
}

export default Bowling;
