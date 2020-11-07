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
  }

  handlePinsEntryChange(event) {
    console.log(e);
    // this.setState({
    //   rollValue: event.target.value
    // });
  }

  render() {
    const { rollValue, handlePinsEntryChange } = this.props;
    return (
      <div>
        <NumPad.Number
          onChange={(value) => { this.setState({rollValue: value}); }}
          label={'Pins Hit'}
          inline='true'
          placeholder={'Enter # of Pins Hit'}
          // value={100}
          decimal={0}
        />
        <BowlingFrames />
      </div>
    );
  }
}

export default BowlingNumbers;
