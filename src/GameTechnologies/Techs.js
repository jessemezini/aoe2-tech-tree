import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Svg from './Svg';
import Tooltip from './Tooltip';

import './spritesheet.css';

import techSprite from './techs.png';

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
              <Svg
                svgSize={tech.svgSize}
                svgTechParentSize={tech.svgTechParentSize}
                svgParentPosition={tech.svgParentPosition}
              />
            </TechItem>
            <Tooltip name={tech.name} desc={tech.desc} />
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
