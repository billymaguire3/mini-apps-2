import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  font-variant-caps: all-petite-caps;
`;

class BowlingHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1>Billy's Bowling</h1>
      </HeaderContainer>
    );
  }
}

export default BowlingHeader;
