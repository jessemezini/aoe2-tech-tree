import React from 'react';
import styled from 'styled-components';
import civsContainer from './civs-container.png';

const CivsContainer = styled.section`
  width: 290px;
  height: 915px;
  margin: 15px;
  background-color: #ebcb9c;
  border-style: solid;
  border-width: 50px 35px 25px 35px;
  border-image: url(${civsContainer}) 36 31 14 31 repeat;
  border-image-outset: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  select {
    width: 290px;
    height: 35px;
    background-color: transparent;
    border: 3px inset #b7a56e;
  }
`;

const CivInfo = styled.div``;

const CivColorInfo = styled.ul`
  li:before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    border: 3px solid #636455;
    background-color: #5492b0;
    margin-right: 5px;
    vertical-align: middle;
  }

  li {
    list-style: none;
    padding-bottom: 5px;
    text-transform: uppercase;
  }
`;

const GameCivilizations = () => (
  <CivsContainer>
    <SelectContainer>
      <p>
        <strong>Game Civilizations</strong>
      </p>
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
    <CivInfo>
      <ul>
        <li>Villagers carry +5</li>
        <li>
          Military units - including Siege Weapons, Warships but not Monks - are
          created 18% faster
        </li>
        <li>Monks +5 hit points for each Monastery technology</li>
        <li>Start with +50 gold</li>
      </ul>

      <p>
        <strong>Unique Unit:</strong> Jaguar Warrior (anti-Infantry Infantry
      </p>

      <p>
        <strong>Castle Age Tech: </strong>Atlatl (Skirmishers, Genitour +1
        Attack, +1 Range)
      </p>

      <p>
        <strong>Imperial Age Tech: </strong>
        Garland Wars (Infantry +4 Attack)
      </p>

      <p>
        <strong>Team Bonus: </strong>
        Relics generate +33% gold
      </p>

      <CivColorInfo>
        <li>
          <small>Units</small>
        </li>
        <li>
          <small>Buildings</small>
        </li>
        <li>
          <small>Technologies</small>
        </li>
        <li>
          <small>Not Available</small>
        </li>
      </CivColorInfo>
    </CivInfo>
  </CivsContainer>
);

export default GameCivilizations;
