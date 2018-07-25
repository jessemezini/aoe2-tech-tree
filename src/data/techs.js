// Size of svgTechParentSize divided by 2 -33.5 (half tech width 32 + margin of 3/2 = 1.5 )

const positionColumnChild = '53px';
const positionColumnChildAge = '71px';
const positionColumnChildAge2 = '192px';

const positionColumn1 = '2px';
const positionColumn2 = '123px';
const positionColumn3 = '262px';
const positionColumn4 = '383px';
const positionColumn5 = '522px';
const positionColumn6 = '642px';
const positionColumn7 = '782px';

const last135 = '135px';
const last255 = '255px';
const last385 = '385px';
const last530 = '530px';
const last650 = '650px';
const last900 = '900px';
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
    name: 'shipwright',
    positionColumn: positionColumn7,
    dontBelongTo: [],
  },
  {
    name: 'koreans-turtle-ship',
    positionColumn: positionColumn5,
    dontBelongTo: [],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'koreans-elite-turtle-ship',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'portugueses-caravel',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-elite-caravel',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'vikings-longboat',
    positionColumn: positionColumn5,
    dontBelongTo: [],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-elite-longboat',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
    uniqueUnitOf: 'Vikings',
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
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'aztecs-elite-jaguar-warrior',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'berbers-camel-archer',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'berbers-elite-camel-archer',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'britons-longbowman',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'britons-elite-longbowman',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'burmese-arambai',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'burmese-elite-arambai',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'byzantines-cataphract',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'byzantines-elite-cataphract',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'celts-woad-raider',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'celts-elite-woad-raider',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'chinese-chu-ko-nu',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'chinese-elite-chu-ko-nu',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'ethiopians-shotel-warrior',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'ethiopians-elite-shotel-warrior',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'franks-throwing-axeman',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'franks-elite-throwing-axeman',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'goths-huskarl',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'goths-elite-huskarl',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'huns-tarkan',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'huns-elite-tarkan',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'incas-kamayuk',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'incas-elite-kamayuk',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'indians-elephant-archer',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'indians-elite-elephant-archer',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'italians-genoese-crossbowman',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'italians-elite-genoese-crossbowman',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'japanese-samurai',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'japanese-elite-samurai',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'khamer-ballista-elephant',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'khamer-elite-ballista-elephant',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'koreans-war-wagon',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-elite-war-wagon',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'magyars-magyar-huszar',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'magyars-elite-magyar-huszar',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'malay-karambit-warrior',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malay-elite-karambit-warrior',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malians-gbeto',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'malians-elite-gbeto',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'mayans-plumed-archer',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mayans-elite-plumed-archer',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mongols-mangudai',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'mongols-elite-mangudai',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'persians-war-elephant',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'persians-elite-war-elephant',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'portugueses-organ-gun',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-elite-organ-gun',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'saracens-mameluke',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'saracens-elite-mameluke',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'slavs-boyar',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'slavs-elite-boyar',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'spanish-conquistador',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'spanish-elite-conquistador',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'teutons-teutonic-knight',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'teutons-elite-teutonic-knight',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'turk-janissary',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Turk',
  },
  {
    name: 'turk-elite-janissary',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Turk',
  },
  {
    name: 'vietnamese-rattan-archer',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vietnamese-elite-rattan-archer',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vikings-berserk',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-elite-berserk',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Vikings',
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
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'aztecs-garland-wars',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'berbers-kasbah',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'berbers-maghrabi-camel',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'britons-yeomen',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'britons-warwolf',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'burmese-howdah',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'burmese-manipur-cavalry',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'byzantines-greek-fire',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'byzantines-logistica',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'celts-stronghold',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'celts-furor-celtica',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'chinese-great-wall',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'chinese-rocketry',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'ethiopians-royal-heirs',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'ethiopians-torsion-engine',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'franks-chivalry',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'franks-bearded-axe',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'goths-anarchy',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'goths-perfusion',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'huns-marauders',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'huns-atheism',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'incas-andean-sling',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'incas-couriers',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'indians-sultans',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'indians-shatagni',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'italians-pavise',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'italians-silk-road',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'japanese-yasama',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'japanese-kataparuto',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'khamer-tusk-swords',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'khamer-double-crossbow',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'koreans-panokseon',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-shinkichon',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'magyars-mercenaries',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'magyars-recurve-bow',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'malay-thalassocracy',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malay-forced-levy',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malians-tigui',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'malians-farimba',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'mayans-obsidian-arrows',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mayans-el-dorado',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mongols-nomads',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'mongols-drill',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'persians-boiling-oil',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'persians-mahouts',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'portugueses-carrack',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-arquebus',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'saracens-madrasah',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'saracens-zealotry',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'slavs-orthodoxy',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'slavs-druzhina',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'spanish-inquisition',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'spanish-supremacy',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'teutons-ironclad',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'teutons-crenellations',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'turk-sipahi',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Turk',
  },
  {
    name: 'turk-artillery',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Turk',
  },
  {
    name: 'vietnamese-chatras',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vietnamese-paper-money',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vikings-chieftains',
    positionColumn: positionColumn6,
    dontBelongTo: [],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-berserkergang',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
    uniqueUnitOf: 'Vikings',
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
    isLast: last135,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region House & Town Center
  {
    name: 'house',
    positionColumn: positionColumn1,
    isLast: last900,
    isLastOfTech,
    dontBelongTo: [],
  },
  {
    name: 'villager',
    positionColumn: positionColumn2,
    dontBelongTo: [],
  },
  {
    name: 'town-watch',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'town-patrol',
    positionColumn: positionColumnChildAge2,
    isLast: last385,
    dontBelongTo: [],
  },
  {
    name: 'town-center',
    positionColumn: positionColumn1,
    dontBelongTo: [],
  },
  {
    name: 'feudal-age',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'castle-age',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'imperial-age',
    positionColumn: positionColumnChildAge2,
    isLast: last385,
    dontBelongTo: [],
  },
  {
    name: 'loom',
    positionColumn: positionColumn2,
    dontBelongTo: [],
  },
  {
    name: 'wheelbarrow',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'hand-cart',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'town-center-building',
    positionColumn: positionColumn5,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Siege Workshop
  {
    name: 'mangonel',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'onager',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'siege-onager',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'siege-workshop',
    positionColumn: positionColumn5,
    isAlignCenter,
    dontBelongTo: [],
  },
  {
    name: 'battering-ram',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'capped-ram',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'siege-ram',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'scorpion',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'heavy-scorpion',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'siege-tower',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'bombard-cannon',
    positionColumn: positionColumnChildAge,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Blacksmith
  {
    name: 'padded-archer-armor',
    positionColumn: positionColumn4,
    dontBelongTo: [],
  },
  {
    name: 'leather-archer-armor',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'ring-archer-armor',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'fletching',
    positionColumn: positionColumn4,
    dontBelongTo: [],
  },
  {
    name: 'bodkin-arrow',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'bracer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'blacksmith',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'forging',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'iron-casting',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'blast-furnace',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'scale-barding-armor',
    positionColumn: positionColumn4,
    dontBelongTo: [],
  },
  {
    name: 'chain-barding-armor',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'plate-barding-armor',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'scale-mail-armor',
    positionColumn: positionColumn4,
    dontBelongTo: [],
  },
  {
    name: 'chain-mail-armor',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'plate-mail-armor',
    positionColumn: positionColumnChildAge2,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region University
  {
    name: 'masonry',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'architecture',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'fortified-wall',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'chemistry',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'bombard-tower',
    positionColumn: positionColumnChild,
    svgSize: svgSize1,
    dontBelongTo: [],
  },
  {
    name: 'ballistics',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'siege-engineers',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'university',
    positionColumn: positionColumn5,
    dontBelongTo: [],
  },
  {
    name: 'guard-tower',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'keep',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'heated-shot',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'arrowslits',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'murder-holes',
    positionColumn: positionColumn6,
    dontBelongTo: [],
  },
  {
    name: 'treadmill-crane',
    positionColumn: positionColumn6,
    isLast: last255,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Mining Camp & Lumber Camp
  {
    name: 'mining-camp',
    positionColumn: positionColumn1,
    isAlignCenter,
    dontBelongTo: [],
  },
  {
    name: 'stone-mining',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'stone-shaft-mining',
    positionColumn: positionColumnChildAge2,
    isLast: last385,
    dontBelongTo: [],
  },
  {
    name: 'gold-mining',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'gold-shaft-mining',
    positionColumn: positionColumnChildAge2,
    isLast: last385,
    isLastOfTech,
    dontBelongTo: [],
  },
  {
    name: 'lumber-camp',
    positionColumn: positionColumn1,
    dontBelongTo: [],
  },
  {
    name: 'double-bit-axe',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'bow-saw',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'two-man-saw',
    positionColumn: positionColumnChildAge2,
    isLastOfTech,
    dontBelongTo: [],
  },
  //#endregion
  //#region Mill
  {
    name: 'cartography',
    positionColumn: positionColumn4,
    dontBelongTo: [],
  },
  {
    name: 'caravan',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'guilds',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'market',
    positionColumn: positionColumn3,
    dontBelongTo: [],
  },
  {
    name: 'coinage',
    positionColumn: positionColumnChild,
    dontBelongTo: [],
  },
  {
    name: 'banking',
    positionColumn: positionColumnChildAge,
    dontBelongTo: [],
  },
  {
    name: 'trade-cart',
    positionColumn: positionColumn4,
    isLast: last530,
    isLastOfTech,
    dontBelongTo: [],
  },
  {
    name: 'mill',
    positionColumn: positionColumn1,
    dontBelongTo: [],
  },
  {
    name: 'horse-collar',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'heavy-plow',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'crop-rotation',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: [],
  },
  {
    name: 'farm',
    positionColumn: positionColumn2,
    dontBelongTo: [],
  },
  //#endregion
];

export default techData;
