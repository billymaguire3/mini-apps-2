import React from 'react';

class SearchBar extends React.Component {
  render() {

    return (
      <div>
        <form>
          <label>
            Search:
            <input
              type="text"
              name="searchTerm"
            />
          </label>
          <input type="submit" value="Submit Search History" />
        </form>
      </div>
    );
  }
}

export default SearchBar;