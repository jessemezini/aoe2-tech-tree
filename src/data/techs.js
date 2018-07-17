// FIXME: imperial-skirmisher
// FIXME: uniqueUnits

const techData = [
  {
    name: 'archer',
    positionColumn: '383px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Aztecs', 'Berbers']
  },
  // {
  //   name: 'crossbowman',
  //   positionColumn: '71px',
  //   isLast: '0',
  //   isLastOfTech: false,
  //   dontBelongTo: ['Berbers', 'Franks', 'Persians']
  // },
  {
    name: 'eagle-warrior',
    positionColumn: '71px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    uniqueUnitOf: 'Aztecs'
  },
  {
    name: 'camel',
    positionColumn: '71px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Celts', 'Franks', 'Persians'],
    uniqueUnitOf: 'Berbers'
  },
  {
    name: 'arbalest',
    positionColumn: '196px',
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
    positionColumn: '196px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'archery-range',
    positionColumn: '258px',
    isLast: '0',
    isLastOfTech: false,
    isAlignCenter: '33.5px',
    isTechParent: true,
    dontBelongTo: []
  },
  {
    name: 'cavalry-archer',
    positionColumn: '196px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: '196px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'slinger',
    positionColumn: '522px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'hand-cannoneer',
    positionColumn: '196px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'genitour',
    positionColumn: '522px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'elite-genitour',
    positionColumn: '196px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'thumb-ring',
    positionColumn: '522px',
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'parthian-tactics',
    positionColumn: '196px',
    isLast: '135px',
    isLastOfTech: true,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  }
];

export default techData;
