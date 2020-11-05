import axios from 'axios';
import React, { Component } from 'react';
import CryptoHeader from './CryptoHeader.jsx';
import CryptoFooter from './CryptoFooter.jsx';
import CryptoGraph from './CryptoGraph.jsx';

class CryptoGraphTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bitCoinPrices: []
    };
    this.getBitcoinData = this.getBitcoinData.bind(this);
  }

  componentDidMount() {
    this.getBitcoinData();
  }


  getBitcoinData() {
    axios.get('/prices')
      .then((bitcoinPriceResponse) => {
        this.setState({
          bitCoinPrices: bitcoinPriceResponse.data.bpi
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { bitCoinPrices } = this.state;
    return (
      <div>
        <CryptoHeader />
        <CryptoGraph
          bitCoinPrices={bitCoinPrices}
        />
        <CryptoFooter />
      </div>
    );
  }
}

export default CryptoGraphTool;