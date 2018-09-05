// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import GameCivilizations from './GameCivilizations/GameCivilizations';
import GameTechnologies from './GameTechnologies/GameTechnologies';

import bg from './bg.jpg';

// #region Styles
const AppContainer = styled.div`
  background-image: url(${bg});
  background-repeat: repeat-x;
  width: 6050px;
  height: 993px;
  padding: 15px;
  display: flex;
`;
// #endregion

type State = {
  wololo: Array<{
    name: string,
    bonus: Array<string>,
    uniqueUnit: string,
    castleAgeTech: string,
    imperialAgeTech: string,
    teamBonus: string,
  }>,
  techs: Array<{
    name: string,
    positionColumn: string,
    svgSize: string,
    svgTechParentSize: string,
    svgParentPosition: string,
    desc: Array<string>,
    dontBelongTo?: Array<string>,
    uniqueUnitOf: string,
    isLast: string,
    isLastOfTech: string,
    isAlignCenter: string,
  }>,
  selectedCiv: string,
};

class App extends Component<{}, State> {
  state = {
    wololo: [],
    techs: [],
    selectedCiv: 'Aztecs',
  };

  componentDidMount() {
    Promise.all([
      import('./data/wololo' /* webpackChunkName: 'wololo' */),
      import('./data/techs' /* webpackChunkName: 'techs' */),
    ]).then(imports => {
      const [wololoData, techData] = imports;
      this.setState({
        wololo: wololoData.default,
        techs: techData.default,
      });
    });
  }

  handleSelectedOption = (e: SyntheticInputEvent<HTMLSelectElement>) => {
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
