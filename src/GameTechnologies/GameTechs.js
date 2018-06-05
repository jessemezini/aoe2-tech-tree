import React from 'react';
import styled from 'styled-components';

const TechsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TechsColumn = styled.div`
  height: 990px;
  display: flex;
  flex-flow: column wrap;
`;

const TechItem = styled.div`
  background: #333;
  width: 64px;
  height: 64px;
  border: 1px solid #fff;
  margin-top: ${props => props.positionColumn};
  margin-left: 3px;
  cursor: pointer;
`;

const positionColumnChild = '59px';
const positionColumnChildAge = '71px';
const positionColumnChildAge2 = '194px';

const positionColumn1 = '1px';
const positionColumn2 = '124px';
const positionColumn3 = '258px';
const positionColumn4 = '381px';
const positionColumn5 = '518px';
const positionColumn6 = '640px';
const positionColumn7 = '775px';

const GameTechs = () => (
  <TechsWrapper>
    <TechsColumn>
      <TechItem positionColumn={positionColumn4} />
      <TechItem positionColumn={positionColumnChildAge} />
      <TechItem positionColumn={positionColumnChildAge2} />

      <TechItem positionColumn={positionColumn4} />
      <TechItem positionColumn={positionColumnChildAge} />
      <TechItem positionColumn={positionColumnChildAge2} />

      <TechItem positionColumn={positionColumn3} />
      <TechItem positionColumn={positionColumnChildAge2} />
      <TechItem positionColumn={positionColumnChildAge2} />

      <TechItem positionColumn={positionColumn5} />
      <TechItem positionColumn={positionColumnChildAge2} />

      <TechItem positionColumn={positionColumn5} />
      <TechItem positionColumn={positionColumnChildAge2} />

      <TechItem positionColumn={positionColumn5} />
      <TechItem positionColumn={positionColumnChildAge2} />

      <TechItem positionColumn={positionColumn1} />
    </TechsColumn>
  </TechsWrapper>
);

export default GameTechs;
