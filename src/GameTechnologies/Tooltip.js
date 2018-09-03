import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

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

const Tooltip = props => (
  <StyledReactTooltip
    key={`${props.name}-tooltip`}
    id={props.name}
    type="light"
    effect="solid"
  >
    <ul>
      {props.desc !== undefined
        ? props.desc.map((civDesc, i) => {
            return <li key={i}>{civDesc}</li>;
          })
        : props.name}
    </ul>
  </StyledReactTooltip>
);

Tooltip.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.array,
};

export default Tooltip;
