import React, { Component } from 'react';
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

class CivSelect extends Component {
  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <SelectContainer>
        <p>Game Civilizations</p>
        <select defaultValue="Aztecs" onChange={this.handleChange}>
          {this.props.wololo.map(civ => {
            return (
              <option key={civ.name} value={civ.name}>
                {civ.name}
              </option>
            );
          })}
        </select>
      </SelectContainer>
    );
  }
}

export default CivSelect;
