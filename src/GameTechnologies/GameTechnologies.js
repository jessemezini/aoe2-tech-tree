// @flow
import React from 'react';
import styled from 'styled-components';

import Ages from './Ages';
import Techs from './Techs';

// #region Styles
const GameTechsContainer = styled.main`
  width: 5700px;
  display: flex;
  justify-content: space-between;
`;
// #endregion

type Props = {
  selectedCiv: string,
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
};

const GameTechnologies = (props: Props) => (
  <GameTechsContainer>
    <Ages />
    <Techs techs={props.techs} selectedCiv={props.selectedCiv} />
    <Ages />
  </GameTechsContainer>
);

GameTechnologies.defaultProps = {
  selectedCiv: 'Aztecs',
};

export default GameTechnologies;
