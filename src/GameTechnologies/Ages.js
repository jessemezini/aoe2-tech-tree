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
    height: 231px;
    margin-bottom: 15px;

    border: 1px solid #ccc;

    p {
      margin: 0;
      font-weight: bold;
    }
  }
`;

const Age = styled.div`
  background-image: url('${ages}');
  background-repeat: no-repeat;
  width: 91px;
  height: ${props => props.height};
  background-position: ${props => props.bgPosition};
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
