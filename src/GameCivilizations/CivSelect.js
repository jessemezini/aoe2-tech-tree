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
      id="selectCivs"
      value={props.selectedCiv}
      onChange={props.handleSelectedOption}
    >
      {props.civNames.map(civName => {
        return (
          <option key={civName} value={civName}>
            {civName}
          </option>
        );
      })}
    </select>
  </SelectContainer>
);
export default CivSelect;
