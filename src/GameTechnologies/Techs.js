import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import './spritesheet.css';
import techSprite from './techs.png';

//#region Styles
const TechsWrapper = styled.div`
  width: 100%;
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

const StyledReactTooltip = styled(ReactTooltip)`
  width: 300px;

  &.show {
    opacity: 1;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  li:first-child {
    font-weight: bold;
  }
`;
//#endregion

const Techs = props => (
  <TechsWrapper>
    {props.techs.map(tech => {
      let dontBelong = '';
      if (tech.dontBelongTo !== undefined) {
        dontBelong =
          tech.dontBelongTo.includes(props.selectedCiv) === true
            ? 'dontBelongTo'
            : '';
      }

      const uniqueUnit =
        tech.uniqueUnitOf === props.selectedCiv ||
        tech.uniqueUnitOf === undefined;

      if (uniqueUnit) {
        return (
          <Fragment key={tech.name}>
            <TechItem
              key={tech.name}
              className={`${tech.name} ${dontBelong}`}
              positionColumn={tech.positionColumn}
              isLast={tech.isLast}
              isLastOfTech={tech.isLastOfTech}
              isAlignCenter={tech.isAlignCenter}
              data-tip
              data-for={tech.name}
              data-place="right"
            >
              <SVGItem width="64" height={tech.svgSize}>
                <line x1="32" y1="0" x2="32" y2={tech.svgSize} />
              </SVGItem>
              {tech.svgTechParentSize && (
                <SVGItemOfParent
                  width={tech.svgTechParentSize}
                  height="3"
                  svgParentPosition={tech.svgParentPosition}
                >
                  <line x1="0" y1="0" x2={tech.svgTechParentSize} y2="0" />
                </SVGItemOfParent>
              )}
            </TechItem>
            <StyledReactTooltip
              key={`${tech.name}-tooltip`}
              id={tech.name}
              type="light"
              effect="solid"
            >
              <ul>
                {tech.desc !== undefined
                  ? tech.desc.map((civDesc, i) => {
                      return <li key={i}>{civDesc}</li>;
                    })
                  : tech.name}
              </ul>
            </StyledReactTooltip>
          </Fragment>
        );
      }

      return null;
    })}
  </TechsWrapper>
);

Techs.propTypes = {
  selectedCiv: PropTypes.string,
  techs: PropTypes.array.isRequired,
};

Techs.defaultProps = {
  selectedCiv: 'Aztecs',
};

export default Techs;
