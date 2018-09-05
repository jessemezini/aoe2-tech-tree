// @flow
import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

// #region Styles
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
// #endregion

type Props = {
  name: string,
  desc: Array<string>,
};

const Tooltip = (props: Props) => (
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

export default Tooltip;
