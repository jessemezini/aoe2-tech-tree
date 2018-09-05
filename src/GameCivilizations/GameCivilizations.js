// @flow
import React from 'react';
import styled from 'styled-components';

import CivSelect from './CivSelect';
import CivInfo from './CivInfo';
import CivColorInfo from './CivColorInfo';
import Footer from './Footer';

import civsContainer from './civs-container.png';

// #region Styles
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
// #endregion

type Props = {
  selectedCiv: string,
  handleSelectedOption: (e: SyntheticInputEvent<HTMLSelectElement>) => void,
  wololo: Array<{
    name: string,
    bonus: Array<string>,
    uniqueUnit: string,
    castleAgeTech: string,
    imperialAgeTech: string,
    teamBonus: string,
  }>,
};

const GameCivilizations = (props: Props) => (
  <CivsContainer>
    <CivSelect
      civNames={props.wololo.map(civ => civ.name)}
      selectedCiv={props.selectedCiv}
      handleSelectedOption={props.handleSelectedOption}
    />
    <CivInfo wololo={props.wololo} selectedCiv={props.selectedCiv} />
    <CivColorInfo />
    <Footer />
  </CivsContainer>
);

GameCivilizations.defaultProps = {
  selectedCiv: 'Aztecs',
};

export default GameCivilizations;
