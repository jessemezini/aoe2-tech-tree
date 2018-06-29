// TODO: dontBelongTo compare with the selected name and if returns true
// add a className to highlight the tech.
// if (props.tech.dontBelongTo.map(civ => {
//  civ === props.selectedCiv ? true : false
// });
//

// FIXME: imperial-skirmisher

const techData = [
  {
    name: 'archer',
    positionColumn: '383px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Aztecs']
  },
  {
    name: 'crossbowman',
    positionColumn: '71px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'arbalest',
    positionColumn: '194px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'skirmisher',
    positionColumn: '383px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'elite-skirmisher',
    positionColumn: '71px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'imperial-skirmisher',
    positionColumn: '194px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'archery-range',
    positionColumn: '260px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'cavalry-archer',
    positionColumn: '194px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: '194px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'slinger',
    positionColumn: '520px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'hand-cannoneer',
    positionColumn: '194px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'genitour',
    positionColumn: '520px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'elite-genitour',
    positionColumn: '194px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'thumb-ring',
    positionColumn: '520px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'parthian-tactics',
    positionColumn: '194px',
    isLast: '140px',
    isLastOfTech: true,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  }
];

export default techData;
