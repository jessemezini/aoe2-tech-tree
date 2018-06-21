import React, { Component } from 'react';
import styled from 'styled-components';

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
    techs: []
  };

  componentWillMount() {
    this.setState({ techs: techData });
  }

  render() {
    return (
      <AppContainer>
        <GameCivilizations />
        <GameTechnologies techs={this.state.techs} />
      </AppContainer>
    );
  }
}

export default App;
