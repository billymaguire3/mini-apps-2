import React from 'react';
import HistoricalHeader from './HistoricalHeader.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class HistoricalFinder extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://localhost:3333/events')
      .then((records) => {
        let historicRecords = records.data;
        let slicedHistoricRecords = historicRecords.slice(this.state.offest, this.state.offset + this.state.perPage);
        this.setState({
          pageCount: Math.ceil(historicRecords.length / this.state.perPage),
          orgtableData: records.data,
          tableData: slicedHistoricRecords,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { tableData } = this.state;
    return (
      <div>
        <HistoricalHeader />

        <table border="1">

          <thead>
            <th>Date</th>
            <th>Description</th>
            <th>Lanuage</th>
            <th>Category 1</th>
            <th>Category 2</th>
            <th>Granularity</th>
          </thead>
          <tbody>
            {
              tableData.map((record) => (
                <tr key={record.date}>
                  <td>{record.date}</td>
                  <td>{record.description}</td>
                  <td>{record.lang}</td>
                  <td>{record.category1}</td>
                  <td>{record.category2}</td>
                  <td>{record.granularity}</td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    );
  }
}

export default HistoricalFinder;