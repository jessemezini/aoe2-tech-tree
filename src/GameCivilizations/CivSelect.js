import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.nav`
  label {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: bold;
  }

  select {
    width: 290px;
    height: 35px;
    background-color: transparent;
    border: 3px inset #b7a56e;
  }
`;

const CivSelect = props => (
  <SelectContainer>
    <label htmlFor="selectCivs">Game Civilizations</label>
    <select
      name="selectCivs"
      value={props.selectedCiv}
      onChange={props.handleSelectedOption}
    >
      {props.wololo.map(civ => {
        return (
          <option key={civ.name} value={civ.name}>
            {civ.name}
          </option>
        );
      })}
    </select>
  </SelectContainer>
);
export default CivSelect;
