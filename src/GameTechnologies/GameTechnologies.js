import React from 'react';
import styled from 'styled-components';

import Ages from './Ages';
import GameTechs from './GameTechs';

const GameTechsContainer = styled.main`
  display: flex;
  flex-direction: row;
`;

const GameTechnologies = () => (
  <GameTechsContainer>
    <Ages />
    <GameTechs />
  </GameTechsContainer>
);

export default GameTechnologies;
