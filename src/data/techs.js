// FIXME: Yasama and Kataparuto

// Size of svgTechParentSize divided by 2 -33.5 (half tech width 32 + margin of 3/2 = 1.5 )

const positionColumnChild = '57px';
const positionColumnChildAge = '71px';
const positionColumnChildAge2 = '192px'; // isLast="135px"

const positionColumn1 = '0';
const positionColumn2 = '123px';
const positionColumn3 = '262px';
const positionColumn4 = '383px';
const positionColumn5 = '522px'; // isLast="255"
// const positionColumn6 = '640px';
// const positionColumn7 = '780px';

const last135 = '135px';

const svgSizeBelowParent = '52';
const svgSize1 = '60';

const techData = [
  //#region Archery Range
  {
    name: 'archer',
    positionColumn: positionColumn4,
    isLast: '0',
    isLastOfTech: false,
    svgSize: svgSizeBelowParent,
    dontBelongTo: ['Aztecs', 'Berbers']
  },
  // {
  //   name: 'crossbowman',
  //   positionColumn: positionColumnChildAge,
  //   isLast: '0',
  //   isLastOfTech: false,
  //   dontBelongTo: ['Berbers', 'Franks', 'Persians']
  // },
  {
    name: 'eagle-warrior',
    positionColumn: positionColumnChildAge,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    uniqueUnitOf: 'Aztecs'
  },
  {
    name: 'camel',
    positionColumn: positionColumnChildAge,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Celts', 'Franks', 'Persians'],
    uniqueUnitOf: 'Berbers'
  },
  {
    name: 'arbalest',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'skirmisher',
    positionColumn: positionColumn4,
    isLast: '0',
    isLastOfTech: false,
    svgSize: svgSizeBelowParent,
    dontBelongTo: []
  },
  {
    name: 'elite-skirmisher',
    positionColumn: positionColumnChildAge,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'imperial-skirmisher',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'archery-range',
    positionColumn: positionColumn3,
    isLast: '0',
    isLastOfTech: false,
    isAlignCenter: '33.5px',
    isTechParent: true,
    svgSize: '100',
    svgTechParentSize: '355',
    dontBelongTo: []
  },
  {
    name: 'cavalry-archer',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'slinger',
    positionColumn: positionColumn5,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'hand-cannoneer',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'genitour',
    positionColumn: positionColumn5,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'elite-genitour',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'thumb-ring',
    positionColumn: positionColumn5,
    isLast: '0',
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'parthian-tactics',
    positionColumn: positionColumnChildAge2,
    isLast: '135px',
    isLastOfTech: true,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  //#endregion
  //#region Barracks
  {
    name: 'militia',
    positionColumn: positionColumn2,
    isLast: '0',
    isLastOfTech: false,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'man-at-arms',
    positionColumn: positionColumnChildAge,
    isLast: '0',
    isLastOfTech: false,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'long-swordsman',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'two-handed-swordsman',
    positionColumn: positionColumnChildAge2,
    isLast: '0',
    isLastOfTech: false,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'champion',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'spearman',
    positionColumn: positionColumn3,
    isLastOfTech: false,
    dontBelongTo: []
  },
  {
    name: 'pikeman',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'halberdier',
    positionColumn: positionColumnChildAge2,
    isLast: last135,
    dontBelongTo: []
  },
  {
    name: 'barracks',
    positionColumn: positionColumn1,
    dontBelongTo: []
  }
  //#endregion
  //#region

  //#endregion
];

export default techData;
