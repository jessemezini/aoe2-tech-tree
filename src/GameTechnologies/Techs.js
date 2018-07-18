import React from 'react';
import styled from 'styled-components';
import './spritesheet.css';
import techSprite from './techs.png';

const TechsWrapper = styled.div`
  min-width: 5210px;
  height: 990px;
  display: flex;
  flex-flow: column wrap;
  align-content: start;
`;

const TechItem = styled.div`
  background-image: url('${techSprite}');
  background-repeat: no-repeat;
  display: block;
  width: 64px;
  height: 64px;
  border: 2px solid transparent;
  margin-top: ${props => props.positionColumn};
  /* margin-right: ${props => (props.isLastOfTech ? '24px' : '0')}; */
  ${props => props.isLastOfTech && 'margin-right: 24px;'}
  margin-bottom: ${props => props.isLast};
  margin-left: 3px;
  cursor: pointer;
  position: relative;
  left: ${props => props.isAlignCenter};

  &:hover {
    border-color: #ffffff;
  }
`;

// const SVG = styled.svg`
//   position: absolute;
//   top: -100px;
//   left: 0;
//   pointer-events: none;
// `;

const SVGItem = styled.svg`
  position: absolute;
  top: -${props => props.height}px;
  left: 0;
  pointer-events: none;
`;

const SVGItemOfParent = styled.svg`
  position: absolute;
  top: 68px;
  left: -145.5px;
  pointer-events: none;
`;

const Techs = props => (
  <TechsWrapper>
    {props.techs.map(tech => {
      const dontBelong =
        tech.dontBelongTo.includes(props.selectedCiv) === true
          ? 'dontBelongTo'
          : null;

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
            {tech.isTechParent && (
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

    {/* <TechItem positionColumn={positionColumn4} />
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
          /> */}
  </TechsWrapper>
);

export default Techs;
