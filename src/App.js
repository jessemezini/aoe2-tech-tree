import React, { Component } from 'react';
import styled from 'styled-components';

// import wololoData from './data/wololo';
// import techData from './data/techs';

import GameCivilizations from './GameCivilizations/GameCivilizations';
import GameTechnologies from './GameTechnologies/GameTechnologies';

import bg from './bg.jpg';

const AppContainer = styled.div`
  background-image: url(${bg});
  background-repeat: repeat-x;
  width: 6050px;
  height: 993px;
  padding: 15px;
  display: flex;
`;

class App extends Component {
  state = {
    wololo: [],
    techs: [],
    selectedCiv: 'Aztecs',
  };

  componentDidMount() {
    // this.setState({ wololo: wololoData, techs: techData });
    import('./data/wololo').then(wololoData => {
      this.setState({ wololo: wololoData.default });
    });

    import('./data/techs').then(techData => {
      this.setState({ techs: techData.default });
    });
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
