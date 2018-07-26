import React from 'react';
import styled from 'styled-components';

import Ages from './Ages';
import Techs from './Techs';

const GameTechsContainer = styled.main`
  min-width: 5700px;
  height: 990px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GameTechnologies = props => (
  <GameTechsContainer>
    <Ages />
    <Techs techs={props.techs} selectedCiv={props.selectedCiv} />
    <Ages />
  </GameTechsContainer>
);

export default GameTechnologies;
