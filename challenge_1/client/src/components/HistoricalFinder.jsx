import React from 'react';
import HistoricalHeader from './HistoricalHeader.jsx';
import axios from 'axios';
import RecordsTable from './RecordsTable.jsx';
import Paginator from './Paginator.jsx';

const url = 'http://localhost:3000/events';

class HistoricalFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      searchTerm: '',
    };
    this.getHistoryBySearch = this.getHistoryBySearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  getHistoryBySearch() {
    event.preventDefault();
    const { searchTerm } = this.state;
    axios.get(`http://localhost:3000/events?q=${searchTerm}&_page=1&_limit=10`)
      .then((searchResults) => {
        this.setState({
          tableData: searchResults.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handlePageChange(event) {
    axios.get(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=${event.selected + 1}&_limit=10`)
      .then((searchResults) => {
        this.setState({
          tableData: searchResults.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { tableData, pageCount, searchTerm } = this.state;
    return (
      <div>
        <HistoricalHeader />
        <div>
          <form>
            <label>
              Search:
              <input
                type="text"
                onChange={this.handleSearchChange}
              />
            </label>
            <input type="submit" value="Submit Search History" onClick={this.getHistoryBySearch} />
          </form>
        </div>
        <RecordsTable
          tableData={tableData}
        />
        <Paginator
          pageCount={pageCount}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default HistoricalFinder;