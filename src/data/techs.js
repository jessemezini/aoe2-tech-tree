// Size of svgTechParentSize divided by 2 -33.5 (half tech width 32 + margin of 3/2 = 1.5 )

const positionColumnChild = '53px';
const positionColumnChildAge = '71px';
const positionColumnChildAge2 = '192px'; // isLast="135px"

const positionColumn1 = '2px';
const positionColumn2 = '123px';
const positionColumn3 = '262px';
const positionColumn4 = '383px';
const positionColumn5 = '522px'; // isLast="255"
// const positionColumn6 = '640px';
// const positionColumn7 = '780px';

const last135 = '135px';
const last255 = '255px';
const isLastOfTech = '24px';

const svgSizeBelowParent = '52';
const svgSize1 = '56';

const techData = [
  //#region Archery Range
  {
    name: 'archer',
    positionColumn: positionColumn4,
    svgSize: svgSizeBelowParent,
    dontBelongTo: ['Aztecs', 'Berbers']
  },
  {
    name: 'crossbowman',
    positionColumn: positionColumnChildAge,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  // {
  //   name: 'eagle-warrior',
  //   positionColumn: positionColumnChildAge,
  //   dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  //   uniqueUnitOf: 'Aztecs'
  // },
  // {
  //   name: 'camel',
  //   positionColumn: positionColumnChildAge,
  //   dontBelongTo: ['Celts', 'Franks', 'Persians'],
  //   uniqueUnitOf: 'Berbers'
  // },
  {
    name: 'arbalest',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'skirmisher',
    positionColumn: positionColumn4,
    svgSize: svgSizeBelowParent,
    dontBelongTo: []
  },
  {
    name: 'elite-skirmisher',
    positionColumn: positionColumnChildAge,
    dontBelongTo: []
  },
  {
    name: 'imperial-skirmisher',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'archery-range',
    positionColumn: positionColumn3,
    isAlignCenter: '33.5px',
    isTechParent: true,
    svgSize: '100',
    svgTechParentSize: '355',
    dontBelongTo: []
  },
  {
    name: 'cavalry-archer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'slinger',
    positionColumn: positionColumn5,
    dontBelongTo: []
  },
  {
    name: 'hand-cannoneer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'genitour',
    positionColumn: positionColumn5,
    dontBelongTo: []
  },
  {
    name: 'elite-genitour',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  {
    name: 'thumb-ring',
    positionColumn: positionColumn5,
    dontBelongTo: []
  },
  {
    name: 'parthian-tactics',
    positionColumn: positionColumnChildAge2,
    isLast: '135px',
    isLastOfTech,
    dontBelongTo: ['Berbers', 'Franks', 'Persians']
  },
  //#endregion
  //#region Barracks
  {
    name: 'militia',
    positionColumn: positionColumn2,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'man-at-arms',
    positionColumn: positionColumnChildAge,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'long-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'two-handed-swordsman',
    positionColumn: positionColumnChildAge2,
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
  },
  {
    name: 'eagle-scout',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'eagle-warrior',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'elite-eagle-warrior',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'tracking',
    positionColumn: positionColumn3,
    dontBelongTo: []
  },
  {
    name: 'squires',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'condottiero',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'arson',
    positionColumn: positionColumn5,
    isLastOfTech,
    dontBelongTo: []
  },
  //#endregion
  //#region Stable
  {
    name: 'bloodlines',
    positionColumn: positionColumn4,
    dontBelongTo: []
  },
  {
    name: 'camel',
    positionColumn: positionColumnChildAge,
    dontBelongTo: []
  },
  {
    name: 'heavy-camel',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'knight',
    positionColumn: positionColumn5,
    dontBelongTo: []
  },
  {
    name: 'cavalier',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'paladin',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: []
  },
  {
    name: 'stable',
    positionColumn: positionColumn3,
    dontBelongTo: []
  },
  {
    name: 'scout-cavalry',
    positionColumn: positionColumnChild,
    dontBelongTo: []
  },
  {
    name: 'light-cavalry',
    positionColumn: positionColumnChildAge,
    dontBelongTo: []
  },
  {
    name: 'hussar',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'battle-elephant',
    positionColumn: positionColumn5,
    dontBelongTo: []
  },
  {
    name: 'elite-battle-elephant',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: []
  },
  {
    name: 'husbandry',
    positionColumn: positionColumn5,
    isLast: last255,
    isLastOfTech,
    dontBelongTo: []
  },
  //#endregion
  //#region Dock
  {
    name: 'fishing-ship',
    positionColumn: positionColumn2,
    dontBelongTo: []
  }
  //#endregion
  //#region Towers and Walls

  //#endregion
];

export default techData;
