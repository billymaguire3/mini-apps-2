import React, { Component } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import NumPad from 'react-numpad';
import BowlingFrames from './BowlingFrames.jsx';

class BowlingNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollValue: ''
    };
    this.handlePinsEntryChange = this.handlePinsEntryChange.bind(this);
  }

  handlePinsEntryChange(enteredValue) {
    if (enteredValue >= 0 && enteredValue <= 10) {
      this.setState({rollValue: enteredValue});
    } else {
      alert('Please enter a number between 0 and 10');
    }
  }

  render() {
    return (
      <div>
        <NumPad.Number
          onChange={(value) => { this.handlePinsEntryChange(value); }}
          label={'Pins Hit'}
          inline='true'
          placeholder={'Enter # of Pins Hit'}
          decimal={0}
        />
        <BowlingFrames />
      </div>
    );
  }
}

export default BowlingNumbers;
