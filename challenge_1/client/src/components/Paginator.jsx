import React from 'react';
import ReactPaginate from 'react-paginate';

class Paginator extends React.Component {
  render() {
    const { pageCount, handlePageChange } = this.props;
    return (
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages-pagination'}
        activeClassName={'active'}
      />
    );
  }
}

export default Paginator;