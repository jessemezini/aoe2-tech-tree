import React from 'react';
import styled from 'styled-components';
import './spritesheet.css';
import techSprite from './techs.png';

const TechsWrapper = styled.div`
  min-width: 5350px;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
`;

const TechItem = styled.div`
  background-image: url('${techSprite}');
  background-repeat: no-repeat;
  display: block;
  width: 64px;
  height: 64px;
  border: 2px solid transparent;
  margin-top: ${props => props.positionColumn};
  margin-right: ${props => props.isLastOfTech};
  margin-bottom: ${props => props.isLast};
  margin-left: 3px;
  cursor: pointer;
  position: relative;
  left: ${props => props.isAlignCenter};

  &:hover {
    border-color: #ffffff;
  }
`;

const SVGItem = styled.svg`
  position: absolute;
  top: -${props => props.height}px;
  left: 0;
  pointer-events: none;
`;

const SVGItemOfParent = styled.svg`
  position: absolute;
  top: 68px;
  left: -${props => props.width / 2 - 32}px;
  pointer-events: none;
`;

const Techs = props => (
  <TechsWrapper>
    {props.techs.map(tech => {
      const dontBelong =
        tech.dontBelongTo.includes(props.selectedCiv) === true
          ? 'dontBelongTo'
          : '';

      const uniqueUnit =
        tech.uniqueUnitOf === props.selectedCiv ||
        tech.uniqueUnitOf === undefined;

      if (uniqueUnit) {
        return (
          <TechItem
            key={tech.name}
            className={`${tech.name} ${dontBelong}`}
            positionColumn={tech.positionColumn}
            isLast={tech.isLast}
            isLastOfTech={tech.isLastOfTech}
            isAlignCenter={tech.isAlignCenter}
          >
            <SVGItem width="64" height={tech.svgSize}>
              <line
                x1="32"
                y1="0"
                x2="32"
                y2={tech.svgSize}
                style={{ stroke: '#333', strokeWidth: 2 }}
              />
            </SVGItem>
            {tech.svgTechParentSize && (
              <SVGItemOfParent width={tech.svgTechParentSize} height="3">
                <line
                  x1="0"
                  y1="0"
                  x2={tech.svgTechParentSize}
                  y2="0"
                  style={{ stroke: '#333', strokeWidth: 3 }}
                />
              </SVGItemOfParent>
            )}
          </TechItem>
        );
      }

      return null;
    })}
  </TechsWrapper>
);

export default Techs;
