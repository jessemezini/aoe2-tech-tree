// Size of svgTechParentSize divided by 2 -33.5 (half tech width 32 + margin of 3/2 = 1.5 )

const positionColumnChild = '53px';
const positionColumnChildAge = '71px';
const positionColumnChildAge2 = '192px'; // isLast="135px"

const positionColumn1 = '2px';
const positionColumn2 = '123px';
const positionColumn3 = '262px';
const positionColumn4 = '383px';
const positionColumn5 = '522px'; // isLast="255"
const positionColumn6 = '642px';
const positionColumn7 = '782px';

const last135 = '135px';
const last255 = '255px';
const last650 = '650px';
const isLastOfTech = '24px';
const isAlignCenter = '33.5px';

const svgSizeBelowParent = '52';
const svgSize1 = '56';

const techData = [
  //#region Archery Range
  {
    name: 'archer',
    positionColumn: positionColumn4,
    svgSize: svgSizeBelowParent,
    dontBelongTo: ['Aztecs', 'Berbers'],
  },
  {
    name: 'crossbowman',
    positionColumn: positionColumnChildAge,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
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
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'skirmisher',
    positionColumn: positionColumn4,
    svgSize: svgSizeBelowParent,
    dontBelongTo: [],
  },
  {
    name: 'elite-skirmisher',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'imperial-skirmisher',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'archery-range',
    positionColumn: positionColumn3,
    isAlignCenter,

    svgSize: '100',
    svgTechParentSize: '355',
    dontBelongTo: [],
  },
  {
    name: 'cavalry-archer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'slinger',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'hand-cannoneer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'genitour',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'elite-genitour',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'thumb-ring',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'parthian-tactics',
    positionColumn: positionColumnChildAge2,
    isLast: '135px',
    isLastOfTech,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  //#endregion
  //#region Barracks
  {
    name: 'militia',
    positionColumn: positionColumn2,
    svgSize: svgSizeBelowParent,
    dontBelongTo: [],
  },
  {
    name: 'man-at-arms',
    positionColumn: positionColumnChildAge,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'long-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'two-handed-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'champion',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'spearman',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'pikeman',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'halberdier',
    positionColumn: positionColumnChildAge2,
    isLast: last135,
    dontBelongTo: [],
  },
  {
    name: 'barracks',
    positionColumn: positionColumn1,
    svgTechParentSize: '555',
    dontBelongTo: [],
  },
  {
    name: 'eagle-scout',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'eagle-warrior',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'elite-eagle-warrior',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'tracking',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'squires',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'condottiero',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'arson',
    positionColumn: positionColumn5,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Stable
  {
    name: 'bloodlines',
    positionColumn: positionColumn4,
    dontBelongTo: [],
  },
  {
    name: 'camel',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'heavy-camel',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'knight',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'cavalier',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'paladin',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'stable',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'scout-cavalry',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'light-cavalry',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'hussar',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'battle-elephant',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'elite-battle-elephant',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'husbandry',
    positionColumn: positionColumn5,
    isLast: last255,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Wonder
  {
    name: 'wonder',
    positionColumn: positionColumn7,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Dock
  {
    name: 'fishing-ship',
    positionColumn: positionColumn2,
    dontBelongTo: [],
  },
  {
    name: 'trade-cog',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'careening',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'dry-dock',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'transport-ship',
    positionColumn: positionColumn2,
    dontBelongTo: [],
  },
  {
    name: 'fire-galley',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'fire-ship',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'fast-fire-ship',
    positionColumn: positionColumnChildAge2,
    isLast: last135,
    dontBelongTo: [],
  },
  {
    name: 'dock',
    positionColumn: positionColumn1,
    isAlignCenter,

    svgTechParentSize: '355',
    dontBelongTo: [],
  },
  {
    name: 'galley',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'war-galley',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'galleon',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'demolition-raft',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'demolition-ship',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'heavy-demo-ship',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'gillnets',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'cannon-galleon',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'elite-cannon-galleon',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'fish-trap',
    positionColumn: positionColumn3,
    isLastOfTech,
    isLast: last650,
    dontBelongTo: [],
  },
  //#endregion
  //#region Towers and Walls
  {
    name: 'outpost',
    positionColumn: positionColumn1,
    dontBelongTo: [],
  },
  {
    name: 'watch-tower',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'guard-tower-building',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'keep-building',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'bombard-tower-building',
    positionColumn: positionColumnChild,
    svgSize: '0',
    dontBelongTo: [],
  },
  {
    name: 'palisade-wall',
    positionColumn: positionColumn1,
    dontBelongTo: [],
  },
  {
    name: 'palisade-gate',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'gate',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'stone-wall',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'fortified-wall-building',
    positionColumn: positionColumnChildAge,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Monastery
  {
    name: 'redemption',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'block-printing',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'fervor',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'illumination',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'sancitity',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'faith',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'monastery',
    positionColumn: positionColumn5,

    svgTechParentSize: '355',
    dontBelongTo: [],
  },
  {
    name: 'atonement',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'theocracy',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'monk',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'herbal-medicine',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'heresy',
    positionColumn: positionColumn6,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Castle
  {
    name: 'aztecs-jaguar-warrior',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'aztecs-elite-jaguar-warrior',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'petard',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'trebuchet',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'aztecs-atlatl',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'aztecs-garland-wars',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'castle',
    positionColumn: positionColumn5,
    svgTechParentSize: '355',
    dontBelongTo: [],
  },
  {
    name: 'hoardings',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'sappers',
    positionColumn: positionColumn7,
    dontBelongTo: [],
  },
  {
    name: 'conscription',
    positionColumn: positionColumn7,
    dontBelongTo: [],
  },
  {
    name: 'spies-treason',
    positionColumn: positionColumn7,
    dontBelongTo: [],
  },
  //#endregion
];

export default techData;
