import React, { Component } from 'react';
import styled from 'styled-components';

import wololoData from './data/wololo';
import techData from './data/techs';

import GameCivilizations from './GameCivilizations/GameCivilizations';
import GameTechnologies from './GameTechnologies/GameTechnologies';

const AppContainer = styled.div`
  padding: 15px;

  display: flex;
  flex-direction: row;
`;

class App extends Component {
  state = {
    wololo: [],
    techs: []
  };

  componentWillMount() {
    this.setState({ wololo: wololoData, techs: techData });
  }

  render() {
    return (
      <AppContainer>
        <GameCivilizations wololo={this.state.wololo} />
        <GameTechnologies techs={this.state.techs} />
      </AppContainer>
    );
  }
}

export default App;
