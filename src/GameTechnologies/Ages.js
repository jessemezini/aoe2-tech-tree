import React from 'react';
import styled from 'styled-components';

import ages from './ages.png';

const AgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-right: 25px;

  > div {
    text-align: center;
    height: 216px;
    margin-bottom: 40px;

    p {
      margin: 0;
      font-weight: bold;
    }
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;

const Age = styled.div`
  background-image: url('${ages}');
  background-repeat: no-repeat;
  width: 91px;
  height: ${props => props.height};
  background-position: ${props => props.bgPosition};
  margin-top: 15px;
`;

const Ages = () => (
  <AgeWrapper>
    <div>
      <Age height="82px" bgPosition="0 0" />
      <p>
        Dark <br />Age
      </p>
    </div>

    <div>
      <Age height="121px" bgPosition="0 -83px" />
      <p>
        Feudal <br />Age
      </p>
    </div>

    <div>
      <Age height="101px" bgPosition="0 -205px" />
      <p>
        Castle <br />Age
      </p>
    </div>

    <div>
      <Age height="105px" bgPosition="0 -307px" />
      <p>
        Imperial <br />Age
      </p>
    </div>
  </AgeWrapper>
);

export default Ages;
