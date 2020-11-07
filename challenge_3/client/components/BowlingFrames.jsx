import React, { Component } from 'react';
import frames from '../FramesInfo';

class BowlingFrames extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{
              frames.map((frame) => (
                <th colspan="2">Frame {frame.number}</th>

              ))
            }</tr>
          </thead>
          <tbody>
            <th>Frame {frame.number}</th>

          </tbody>
        </table>
      </div>
    );
  }
}

export default BowlingFrames;
