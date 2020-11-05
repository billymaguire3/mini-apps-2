import React, { Component } from 'react';
import CryptoHeader from './CryptoHeader.jsx';
import CryptoFooter from './CryptoFooter.jsx';

class CryptoGraphTool extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <CryptoHeader />
        <CryptoFooter />
      </div>
    );
  }
}

export default CryptoGraphTool;