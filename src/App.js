import React, { Component } from 'react';
import styled from 'styled-components';
import GameCivilizations from './GameCivilizations/GameCivilizations';
import GameTechnologies from './GameTechnologies/GameTechnologies';

const AppContainer = styled.div`
  padding: 15px;

  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GameCivilizations />
        <GameTechnologies />
      </AppContainer>
    );
  }
}

export default App;
