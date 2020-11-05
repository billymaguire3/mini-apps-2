import React from 'react';
import HistoricalHeader from './HistoricalHeader.jsx';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import RecordsTable from './RecordsTable.jsx';
import Paginator from './Paginator.jsx';

class HistoricalFinder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
      pageCount: 0,
    };
    this.getHistory = this.getHistory.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.loadMoreHistory = this.loadMoreHistory.bind(this);
  }

  componentDidMount() {
    this.getHistory();
  }

  getHistory() {
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

  handlePageClick(event) {
    const selectedPage = event.selected;
    const newOffset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: newOffset
    }, () => {
      this.loadMoreHistory();
    });
  }

  loadMoreHistory() {
    const historicRecords = this.state.orgtableData;
    const slicedHistoricRecords = historicRecords.slice(this.state.offset, this.state.offset + this.state.perPage);
    this.setState({
      pageCount: Math.ceil(historicRecords.length / this.state.perPage),
      tableData: slicedHistoricRecords
    });
  }

  render() {
    const { tableData, pageCount } = this.state;
    return (
      <div>
        <HistoricalHeader />
        <SearchBar />
        <RecordsTable
          tableData={tableData}
        />
        <Paginator
          pageCount={pageCount}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
}

export default HistoricalFinder;