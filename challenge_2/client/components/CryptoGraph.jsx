import React, { Component } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';


class CryptoGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.generateDateLabels = this.generateDateLabels.bind(this);
  }

  generateDateLabels (priceList) {
    const labels = [];
    for (let date in priceList) {
      labels.push(date);
    }
    return labels;
  }

  generatePriceArray(priceList) {
    const prices = [];
    for (let date in priceList) {
      let price = priceList[date];
      prices.push(price);
    }
    return prices;
  }

  render() {
    const graphData = {
      labels: this.generateDateLabels(this.props.bitCoinPrices),
      datasets: [
        {
          label: 'Price USD',
          data: this.generatePriceArray(this.props.bitCoinPrices),
          backgroundColor: '#004f15'
        }
      ]
    };
    return (
      <div>
        <Line
          data={graphData}
          options={{
            title: {
              display: true,
              text: 'Daily Bitcoin Prices for Last 31 days'
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}

export default CryptoGraph;
