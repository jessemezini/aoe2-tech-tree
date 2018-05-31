import React from 'react';
import styled from 'styled-components';

const CivColor = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  div::before {
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

  div {
    margin-bottom: 10px;
    width: 130px;
  }
`;

const CivColorInfo = () => (
  <CivColor>
    <div>Units</div>
    <div>Buildings</div>
    <div>Technologies</div>
    <div>Not Available</div>
  </CivColor>
);

export default CivColorInfo;
