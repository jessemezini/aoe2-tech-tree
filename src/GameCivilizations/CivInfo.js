// @flow
import React, { Fragment } from 'react';

type Props = {
  selectedCiv: string,
  wololo: Array<{
    name: string,
    bonus: Array<string>,
    uniqueUnit: string,
    castleAgeTech: string,
    imperialAgeTech: string,
    teamBonus: string,
  }>,
};

const CivInfo = (props: Props) => (
  <Fragment>
    {props.wololo.filter(civ => civ.name === props.selectedCiv).map(civ => {
      return (
        <article key={civ.name}>
          <ul>
            {civ.bonus.map((bonus, i) => {
              return <li key={i}>{bonus}</li>;
            })}
          </ul>

          <p>
            <strong>Unique Unit:</strong> {civ.uniqueUnit}
          </p>

          <p>
            <strong>Castle Age Tech: </strong> {civ.castleAgeTech}
          </p>

          <p>
            <strong>Imperial Age Tech: </strong> {civ.imperialAgeTech}
          </p>

          <p>
            <strong>Team Bonus: </strong> {civ.teamBonus}
          </p>
        </article>
      );
    })}
  </Fragment>
);

CivInfo.defaultProps = {
  selectedCiv: 'Aztecs',
};

export default CivInfo;
