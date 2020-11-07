import React, { Component } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import NumPad from 'react-numpad';


class BowlingNumbers extends Component {
  render() {
    return (
      <div style={{

      }}>
        <NumPad.Number
          onChange={(value) => { console.log('value', value); }}
          label={'Pins Hit'}
          inline='true'
          placeholder={'Enter # of Pins Hit'}
          // value={100}
          decimal={0}
        />
      </div>
    );
  }
}

export default BowlingNumbers;
