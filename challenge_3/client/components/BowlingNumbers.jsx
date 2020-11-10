import React, { Component } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import NumPad from 'react-numpad';
import BowlingFrames from './BowlingFrames.jsx';

class BowlingNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
    };
    this.handlePinsEntryChange = this.handlePinsEntryChange.bind(this);
    this.addScores = this.addScores.bind(this);
  }

  addScores(value) {
    this.state.scores.push(value);
  }

  handlePinsEntryChange(enteredValue) {
    if (enteredValue >= 0 && enteredValue <= 10) {
      this.setState({
        scores: [...this.state.scores, enteredValue]
      });
    } else {
      alert('Please enter a number between 0 and 10');
    }
  }

  render() {
    const { scores } = this.state;
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === '10') {
        scores[i + 1] = undefined;
      }
    }
    return (
      <div>
        <NumPad.Number
          onChange={(value) => { this.handlePinsEntryChange(value); }}
          label={'Pins Hit'}
          inline='true'
          placeholder={'Enter # of Pins Hit'}
          decimal={0}
        />
        <BowlingFrames scores={scores}/>
      </div>
    );
  }
}

export default BowlingNumbers;
