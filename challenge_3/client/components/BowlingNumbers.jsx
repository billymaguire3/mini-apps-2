import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import NumPad from 'react-numpad';

const BowlingNumbers = () => {
  return (
    <div>
      <NumPad.Number
        onChange={(value) => { console.log('value', value); }}
        label={'Total'}
        placeholder={'my placeholder'}
        value={100}
        decimal={2}
      />
    </div>
  );
};

export default BowlingNumbers;
