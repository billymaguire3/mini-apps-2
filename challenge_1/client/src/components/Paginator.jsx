import React from 'react';
import ReactPaginate from 'react-paginate';

class Paginator extends React.Component {
  render() {
    return (
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={this.props.pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={this.props.handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages-pagination'}
        activeClassName={'active'}
      />
    );
  }
}

export default Paginator;