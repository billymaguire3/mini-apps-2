import React, { Component } from 'react';
import frames from '../FramesInfo';
import styled from 'styled-components';

const FrameNumberRow = styled.th`
  width: 50px;
`;
const FrameNumberTen = styled(FrameNumberRow)`
  width: 75px;
`;

const RollOneResult = styled.div`
  display: inline;
  float: left;
  border-right: 2px solid darkgray;
  width: 24px;
  height: 19px;
`;
const RollTwoResult = styled(RollOneResult)`
  float: right;
  border: none;
`;

const ScoreRowCell = styled.div`
  width: 54px;
  height: 21px;
`;

class BowlingFrames extends Component {
  constructor(props) {
    super(props);
    this.scoreHandler = this.scoreHandler.bind(this);
  }

  scoreHandler(score1, score2, index) {
    if (Number(score1) === 10) {
      return (
        <td key={index}>
          <RollOneResult>X</RollOneResult>
          <RollTwoResult> </RollTwoResult>
        </td>
      );
    } else if ((Number(score1) + Number(score2)) === 10) {
      return (
        <td key={index}>
          <RollOneResult>{score1}</RollOneResult>
          <RollTwoResult>/</RollTwoResult>
        </td>
      );
    } else {
      return (
        <td key={index}>
          <RollOneResult>{score1}</RollOneResult>
          <RollTwoResult>{score2}</RollTwoResult>
        </td>
      );
    }
  }

  render() {
    const { scores } = this.props;
    const framesArray = [
      [scores[0], scores[1]],
      [scores[2], scores[3]],
      [scores[4], scores[5]],
      [scores[6], scores[7]],
      [scores[8], scores[9]],
      [scores[10], scores[11]],
      [scores[12], scores[13]],
      [scores[14], scores[15]],
      [scores[16], scores[17]],
      [scores[18], scores[19]],
    ];
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
              framesArray.map((frame, index) => {
                const frameScores = this.scoreHandler(frame[0], frame[1], index);
                return frameScores;
              })
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
