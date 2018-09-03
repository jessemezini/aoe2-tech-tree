import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

App.propTypes = {
  selectedCiv: PropTypes.string,
};

App.defaultProps = {
  selectedCiv: 'Aztecs',
};

export default App;
