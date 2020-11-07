import React, { Component } from 'react';
import frames from '../FramesInfo';
import styled from 'styled-components';

const FrameNumber = styled.th`
  width: 50px;
`;

const FirstFrame = styled.div`
  display: inline;
  float: left;
  border-right: 2px solid darkgray;
  padding-right: 1em;
`;
const SecondFrame = styled.div`
  display: inline;
  float: right;
`;

class BowlingFrames extends Component {
  render() {
    return (
      <div>
        <h3>scoreboard</h3>
        <table
          style={{
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          border="1">
          <thead>
            <tr>{
              frames.map((frame, index) => (
                <FrameNumber key={index}>{frame.number}</FrameNumber>
              ))
            }</tr>
          </thead>
          <tbody>
            <tr>{
              frames.map((frame, index) => (
                <td key={index}>
                  <FirstFrame>{frame.frameOne}</FirstFrame>
                  <SecondFrame>{frame.frameTwo}</SecondFrame>
                </td>
              ))
            }</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BowlingFrames;
