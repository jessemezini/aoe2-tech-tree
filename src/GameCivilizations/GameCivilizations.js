import React from 'react';
import styled from 'styled-components';
import civsContainer from './civs-container.png';

import CivSelect from './CivSelect';
import CivInfo from './CivInfo';
import CivColorInfo from './CivColorInfo';

const CivsContainer = styled.header`
  width: 290px;
  height: 915px;
  background-color: #ebcb9c;
  border-style: solid;
  border-width: 50px 35px 25px 35px;
  border-image: url(${civsContainer}) 36 31 14 31 repeat;
  border-image-outset: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const GameCivilizations = props => (
  <CivsContainer>
    <CivSelect
      wololo={props.wololo}
      selectedCiv={props.selectedCiv}
      handleSelectedOption={props.handleSelectedOption}
    />
    <CivInfo />
    <CivColorInfo />
  </CivsContainer>
);

export default GameCivilizations;
