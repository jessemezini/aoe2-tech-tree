import React from 'react';
import styled from 'styled-components';

import Ages from './Ages';

const GameTechs = styled.main`
  display: flex;
  flex-direction: row;
`;

const GameTechnologies = () => (
  <GameTechs>
    <Ages />
  </GameTechs>
);

export default GameTechnologies;
