import React from 'react';
import HistoricalHeader from './HistoricalHeader.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchBar from './SearchBar.jsx';

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
    const { tableData } = this.state;
    return (
      <div>
        <HistoricalHeader />
        <SearchBar />
        <table border="1">

          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Lanuage</th>
              <th>Category 1</th>
              <th>Category 2</th>
              <th>Granularity</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((record, index) => (
                <tr key={index}>
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

        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages-pagination'}
          activeClassName={'active'}
        />

      </div>
    );
  }
}

export default HistoricalFinder;