import React from 'react';
import styled from 'styled-components';

// #region Styles
const CivColorWrapper = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CivColor = styled.div`
  &::before {
    content: '${props => (props.notAvailable ? 'X' : '')}';
    display: inline-block;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    margin-right: 5px;
    background-color: ${props => props.bgColor};
    font-size: 25px;
    text-align: center;
    padding: 1px;
    color: red;
  }

  margin-bottom: 10px;
  width: 135px;
`;
// #endregion

const CivColorInfo = () => (
  <CivColorWrapper>
    <CivColor bgColor="#5492b0">Units</CivColor>
    <CivColor bgColor="#d23700">Buildings</CivColor>
    <CivColor bgColor="#557734">Technologies</CivColor>
    <CivColor bgColor="none" notAvailable>
      Not Available
    </CivColor>
  </CivColorWrapper>
);

export default CivColorInfo;
