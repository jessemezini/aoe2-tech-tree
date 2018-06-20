import React, { Component } from 'react';
import styled from 'styled-components';

import techData from '../data/techs';

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
  margin-bottom: ${props => props.isLast};
  margin-left: 3px;
  margin-right: ${props => (props.isLastOfTech ? '24px' : '0')};
  cursor: pointer;
`;

const positionColumnChild = '57px';
const positionColumnChildAge = '71px';
const positionColumnChildAge2 = '194px'; // isLast="140px"

const positionColumn1 = '0';
const positionColumn2 = '123px';
const positionColumn3 = '260px';
const positionColumn4 = '383px';
const positionColumn5 = '520px'; // isLast="260"
const positionColumn6 = '640px';
const positionColumn7 = '780px';

class GameTechs extends Component {
  state = {
    techs: {}
  };

  componentWillMount() {
    this.setState({ techs: techData });
  }

  render() {
    return (
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
          <TechItem
            positionColumn={positionColumnChildAge2}
            isLast="140px"
            isLastOfTech
          />

          <TechItem positionColumn={positionColumn2} />
          <TechItem positionColumn={positionColumnChildAge} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChild} />

          <TechItem positionColumn={positionColumn3} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge2} isLast="140px" />

          <TechItem positionColumn={positionColumn1} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge2} />

          <TechItem positionColumn={positionColumn3} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge2} />

          <TechItem positionColumn={positionColumn5} isLastOfTech />

          <TechItem positionColumn={positionColumn4} />
          <TechItem positionColumn={positionColumnChildAge} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge} />

          <TechItem positionColumn={positionColumn5} />
          <TechItem positionColumn={positionColumnChildAge2} />
          <TechItem positionColumn={positionColumnChildAge} />

          <TechItem positionColumn={positionColumn3} />
          <TechItem positionColumn={positionColumnChild} />
          <TechItem positionColumn={positionColumnChildAge} />
          <TechItem positionColumn={positionColumnChildAge2} />

          <TechItem positionColumn={positionColumn5} />
          <TechItem positionColumn={positionColumnChildAge2} />

          <TechItem positionColumn={positionColumn5} isLastOfTech />

          <TechItem
            positionColumn={positionColumn7}
            isLast="140px"
            isLastOfTech
          />
        </TechsColumn>
      </TechsWrapper>
    );
  }
}

export default GameTechs;
