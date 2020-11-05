import React from 'react';

class RecordsTable extends React.Component {
  render() {
    const { tableData } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

export default RecordsTable;