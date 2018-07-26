import React, { Component } from 'react';
import styled from 'styled-components';

import wololoData from './data/wololo';
import techData from './data/techs';

import GameCivilizations from './GameCivilizations/GameCivilizations';
import GameTechnologies from './GameTechnologies/GameTechnologies';

import bg from './bg.jpg';

const AppContainer = styled.div`
  background-image: url(${bg});
  background-repeat: repeat-x;
  min-width: 6050px;
  min-height: 1008px;
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  state = {
    wololo: [],
    techs: [],
    selectedCiv: 'Aztecs',
  };

  componentDidMount() {
    this.setState({ wololo: wololoData, techs: techData });
  }

  handleSelectedOption = e => {
    this.setState({ selectedCiv: e.target.value });
  };

  render() {
    return (
      <AppContainer>
        <GameCivilizations
          wololo={this.state.wololo}
          selectedCiv={this.state.selectedCiv}
          handleSelectedOption={this.handleSelectedOption}
        />
        <GameTechnologies
          techs={this.state.techs}
          selectedCiv={this.state.selectedCiv}
        />
      </AppContainer>
    );
  }
}

export default App;
