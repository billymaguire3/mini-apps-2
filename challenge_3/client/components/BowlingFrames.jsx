import React, { Component } from 'react';
import frames from '../FramesInfo';
import styled from 'styled-components';

const FrameNumberRow = styled.th`
  width: 50px;
`;

const FirstFrame = styled.div`
  display: inline;
  float: left;
  border-right: 2px solid darkgray;
  width: 24px;
  height: 19px;
`;
const SecondFrame = styled(FirstFrame)`
  float: right;
  border: none;
`;

const ScoreRowCell = styled.div`
  width: 54px;
  height: 21px;
`;

class BowlingFrames extends Component {
  render() {
    return (
      <div>
        <h3>scorecard</h3>
        <table
          style={{
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          border="1">
          <thead>
            <tr>{
              frames.map((frame, index) => (
                <FrameNumberRow key={index}>{frame.number}</FrameNumberRow>
              ))
            }</tr>
          </thead>
          <tbody>
            <tr>{
              frames.map((frame, index) => (
                <td key={index}>
                  <FirstFrame></FirstFrame>
                  <SecondFrame></SecondFrame>
                </td>
              ))
            }</tr>
            <tr>{
              frames.map((frame, index) => (
                <td key={index}>
                  <ScoreRowCell></ScoreRowCell>
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
