import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.nav`
  p {
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

const CivSelect = () => (
  <SelectContainer>
    <p>Game Civilizations</p>
    <select>
      <option value="Aztecs">Aztecs</option>
      <option value="Britons">Britons</option>
      <option value="Huns">Huns</option>
      <option value="Teutons">Teutons</option>
      <option value="Bizantines">Bizantines</option>
      <option value="Celts">Celts</option>
      <option value="Khamer">Khamer</option>
    </select>
  </SelectContainer>
);

export default CivSelect;
