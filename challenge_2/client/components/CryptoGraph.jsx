import React, { Component } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';


class CryptoGraph extends Component {
  render() {
    const dateStorage = Object.keys(this.props.bitCoinPrices);
    const priceStorage = Object.values(this.props.bitCoinPrices);
    const graphData = {
      labels: dateStorage,
      datasets: [
        {
          label: 'Price USD',
          data: priceStorage,
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
            },
            height: '500px',
          }}
        />
      </div>
    );
  }
}
export default CryptoGraph;
