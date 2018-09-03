import React, { Fragment } from 'react';
import styled from 'styled-components';

const SVGItem = styled.svg`
  position: absolute;
  top: -${props => props.height}px;
  left: 0;
  pointer-events: none;

  line {
    stroke: #333;
    stroke-width: 2;
  }
`;

const SVGItemOfParent = styled.svg`
  position: absolute;
  top: 68px;
  left: ${props => props.svgParentPosition};
  pointer-events: none;

  line {
    stroke: #333;
    stroke-width: 3;
  }
`;

const Svg = props => (
  <Fragment>
    <SVGItem width="64" height={props.svgSize}>
      <line x1="32" y1="0" x2="32" y2={props.svgSize} />
    </SVGItem>
    {props.svgTechParentSize && (
      <SVGItemOfParent
        width={props.svgTechParentSize}
        height="3"
        svgParentPosition={props.svgParentPosition}
      >
        <line x1="0" y1="0" x2={props.svgTechParentSize} y2="0" />
      </SVGItemOfParent>
    )}
  </Fragment>
);

export default Svg;
