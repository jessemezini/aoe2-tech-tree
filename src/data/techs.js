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
const isAlignCenter = '35.5px';

const svgSizeChildBelowParent = '52';
const svgSizeChildAge2BelowParent = '191';
const svgSizeChild = '56';
const svgSizeChildAge = '74';
const svgSizeChildAge2 = '195';

const techData = [
  //#region Archery Range
  {
    name: 'archer',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    dontBelongTo: ['Aztecs', 'Berbers'],
  },
  {
    name: 'crossbowman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'arbalest',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'skirmisher',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'elite-skirmisher',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'imperial-skirmisher',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'archery-range',
    positionColumn: positionColumn3,
    isAlignCenter,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '357',
    svgParentPosition: '-146.5px',

  },
  {
    name: 'cavalry-archer',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'slinger',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'hand-cannoneer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'genitour',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'elite-genitour',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
  },
  {
    name: 'thumb-ring',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,

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
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'man-at-arms',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'long-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'two-handed-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'champion',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,

  },
  {
    name: 'spearman',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'pikeman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'halberdier',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last135,

  },
  {
    name: 'barracks',
    positionColumn: positionColumn1,
    svgTechParentSize: '795',
    svgParentPosition: '-383px',

  },
  {
    name: 'eagle-scout',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'eagle-warrior',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'elite-eagle-warrior',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'tracking',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'squires',
    positionColumn: positionColumnChildAge2,

  },
  {
    name: 'condottiero',
    positionColumn: positionColumnChildAge2,

  },
  {
    name: 'arson',
    positionColumn: positionColumn5,
    svgSize: '452',
    isLastOfTech,

  },
  //#endregion
  //#region Stable
  {
    name: 'bloodlines',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'camel',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'heavy-camel',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'knight',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'cavalier',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'paladin',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,

  },
  {
    name: 'stable',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '286',
    svgParentPosition: '-111px',

  },
  {
    name: 'scout-cavalry',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'light-cavalry',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'hussar',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'battle-elephant',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'elite-battle-elephant',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'husbandry',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    isLast: last255,
    isLastOfTech,

  },
  //#endregion
  //#region Wonder
  {
    name: 'wonder',
    positionColumn: positionColumn7,
    isLastOfTech,

  },
  //#endregion
  //#region Dock
  {
    name: 'fishing-ship',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'trade-cog',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'careening',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'dry-dock',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'transport-ship',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'fire-galley',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'fire-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'fast-fire-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'galley',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'war-galley',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'galleon',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last135,

  },
  {
    name: 'dock',
    positionColumn: positionColumn1,
    isAlignCenter,
    svgTechParentSize: '499.5',
    svgParentPosition: '-217.75px',

  },
  {
    name: 'demolition-raft',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'demolition-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'heavy-demo-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'gillnets',
    positionColumn: positionColumn5,
    svgSize: '452',

  },
  {
    name: 'cannon-galleon',
    positionColumn: positionColumnChildAge2,

  },
  {
    name: 'elite-cannon-galleon',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,

  },
  {
    name: 'shipwright',
    positionColumn: positionColumn7,
    svgSize: '711',

  },
  {
    name: 'empty',
    positionColumn: positionColumn3,

  },
  {
    name: 'koreans-turtle-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: '452',

    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-elite-turtle-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'portugueses-caravel',
    positionColumn: positionColumnChildAge2,
    svgSize: '452',

    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-elite-caravel',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'vikings-longboat',
    positionColumn: positionColumnChildAge2,
    svgSize: '452',

    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-elite-longboat',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'fish-trap',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    isLastOfTech,
    isLast: last650,

  },
  //#endregion
  //#region Towers and Walls
  {
    name: 'outpost',
    positionColumn: positionColumn1,

  },
  {
    name: 'watch-tower',
    positionColumn: positionColumnChildAge2,

  },
  {
    name: 'guard-tower-building',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'keep-building',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'bombard-tower-building',
    positionColumn: positionColumnChild,
    svgSize: '0',

  },
  {
    name: 'palisade-wall',
    positionColumn: positionColumn1,

  },
  {
    name: 'palisade-gate',
    positionColumn: positionColumnChild,

  },
  {
    name: 'gate',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'stone-wall',
    positionColumn: positionColumnChild,

  },
  {
    name: 'fortified-wall-building',
    positionColumn: positionColumnChildAge,
    isLastOfTech,

  },
  //#endregion
  //#region Monastery
  {
    name: 'redemption',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'block-printing',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'fervor',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'illumination',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'sancitity',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'faith',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'monastery',
    positionColumn: positionColumn5,
    svgTechParentSize: '425',
    svgParentPosition: '-180.5px',

  },
  {
    name: 'atonement',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'theocracy',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'monk',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'herbal-medicine',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'heresy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    isLastOfTech,

  },
  //#endregion
  //#region Castle
  {
    name: 'aztecs-jaguar-warrior',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'aztecs-elite-jaguar-warrior',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'berbers-camel-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'berbers-elite-camel-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'britons-longbowman',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Britons',
  },
  {
    name: 'britons-elite-longbowman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Britons',
  },
  {
    name: 'burmese-arambai',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'burmese-elite-arambai',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'byzantines-cataphract',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'byzantines-elite-cataphract',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'celts-woad-raider',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Celts',
  },
  {
    name: 'celts-elite-woad-raider',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Celts',
  },
  {
    name: 'chinese-chu-ko-nu',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'chinese-elite-chu-ko-nu',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'ethiopians-shotel-warrior',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'ethiopians-elite-shotel-warrior',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'franks-throwing-axeman',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Franks',
  },
  {
    name: 'franks-elite-throwing-axeman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Franks',
  },
  {
    name: 'goths-huskarl',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Goths',
  },
  {
    name: 'goths-elite-huskarl',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Goths',
  },
  {
    name: 'huns-tarkan',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Huns',
  },
  {
    name: 'huns-elite-tarkan',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Huns',
  },
  {
    name: 'incas-kamayuk',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Incas',
  },
  {
    name: 'incas-elite-kamayuk',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Incas',
  },
  {
    name: 'indians-elephant-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Indians',
  },
  {
    name: 'indians-elite-elephant-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Indians',
  },
  {
    name: 'italians-genoese-crossbowman',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Italians',
  },
  {
    name: 'italians-elite-genoese-crossbowman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Italians',
  },
  {
    name: 'japanese-samurai',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'japanese-elite-samurai',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'khamer-ballista-elephant',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'khamer-elite-ballista-elephant',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'koreans-war-wagon',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-elite-war-wagon',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'magyars-magyar-huszar',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'magyars-elite-magyar-huszar',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'malay-karambit-warrior',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malay-elite-karambit-warrior',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malians-gbeto',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Malians',
  },
  {
    name: 'malians-elite-gbeto',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Malians',
  },
  {
    name: 'mayans-plumed-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mayans-elite-plumed-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mongols-mangudai',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'mongols-elite-mangudai',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'persians-war-elephant',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Persians',
  },
  {
    name: 'persians-elite-war-elephant',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Persians',
  },
  {
    name: 'portugueses-organ-gun',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-elite-organ-gun',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'saracens-mameluke',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'saracens-elite-mameluke',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'slavs-boyar',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'slavs-elite-boyar',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'spanish-conquistador',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'spanish-elite-conquistador',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'teutons-teutonic-knight',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'teutons-elite-teutonic-knight',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'turk-janissary',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Turk',
  },
  {
    name: 'turk-elite-janissary',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Turk',
  },
  {
    name: 'vietnamese-rattan-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vietnamese-elite-rattan-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vikings-berserk',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-elite-berserk',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'petard',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'trebuchet',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'aztecs-atlatl',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'aztecs-garland-wars',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'berbers-kasbah',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'berbers-maghrabi-camel',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'britons-yeomen',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Britons',
  },
  {
    name: 'britons-warwolf',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Britons',
  },
  {
    name: 'burmese-howdah',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'burmese-manipur-cavalry',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'byzantines-greek-fire',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'byzantines-logistica',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'celts-stronghold',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Celts',
  },
  {
    name: 'celts-furor-celtica',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Celts',
  },
  {
    name: 'chinese-great-wall',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'chinese-rocketry',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'ethiopians-royal-heirs',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'ethiopians-torsion-engine',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'franks-chivalry',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Franks',
  },
  {
    name: 'franks-bearded-axe',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Franks',
  },
  {
    name: 'goths-anarchy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Goths',
  },
  {
    name: 'goths-perfusion',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Goths',
  },
  {
    name: 'huns-marauders',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Huns',
  },
  {
    name: 'huns-atheism',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Huns',
  },
  {
    name: 'incas-andean-sling',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Incas',
  },
  {
    name: 'incas-couriers',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Incas',
  },
  {
    name: 'indians-sultans',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Indians',
  },
  {
    name: 'indians-shatagni',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Indians',
  },
  {
    name: 'italians-pavise',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Italians',
  },
  {
    name: 'italians-silk-road',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Italians',
  },
  {
    name: 'japanese-yasama',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'japanese-kataparuto',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'khamer-tusk-swords',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'khamer-double-crossbow',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'koreans-panokseon',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-shinkichon',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'magyars-mercenaries',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'magyars-recurve-bow',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'malay-thalassocracy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malay-forced-levy',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malians-tigui',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Malians',
  },
  {
    name: 'malians-farimba',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Malians',
  },
  {
    name: 'mayans-obsidian-arrows',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mayans-el-dorado',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mongols-nomads',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'mongols-drill',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'persians-boiling-oil',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Persians',
  },
  {
    name: 'persians-mahouts',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Persians',
  },
  {
    name: 'portugueses-carrack',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-arquebus',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'saracens-madrasah',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'saracens-zealotry',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'slavs-orthodoxy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'slavs-druzhina',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'spanish-inquisition',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'spanish-supremacy',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'teutons-ironclad',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'teutons-crenellations',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'turk-sipahi',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Turk',
  },
  {
    name: 'turk-artillery',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Turk',
  },
  {
    name: 'vietnamese-chatras',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vietnamese-paper-money',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vikings-chieftains',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-berserkergang',
    positionColumn: positionColumnChildAge,

    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'castle',
    positionColumn: positionColumn5,
    svgTechParentSize: '427',
    svgParentPosition: '-181.5px',

  },
  {
    name: 'hoardings',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'sappers',
    positionColumn: positionColumn7,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'conscription',
    positionColumn: positionColumn7,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'spies-treason',
    positionColumn: positionColumn7,
    svgSize: svgSizeChildAge2BelowParent,
    isLast: last135,
    isLastOfTech,

  },
  //#endregion
  //#region House & Town Center
  {
    name: 'house',
    positionColumn: positionColumn1,
    isLast: last900,
    isLastOfTech,

  },
  {
    name: 'villager',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'town-watch',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'town-patrol',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    isLast: last385,

  },
  {
    name: 'town-center',
    positionColumn: positionColumn1,
    svgTechParentSize: '144.5',
    svgParentPosition: '-40.25px',

  },
  {
    name: 'feudal-age',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'castle-age',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'imperial-age',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last385,

  },
  {
    name: 'loom',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'wheelbarrow',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'hand-cart',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'town-center-building',
    positionColumn: positionColumn5,
    isLastOfTech,

  },
  //#endregion
  //#region Siege Workshop
  {
    name: 'mangonel',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'onager',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'siege-onager',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,

  },
  {
    name: 'siege-workshop',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '213',
    svgParentPosition: '-74.5px',
    isAlignCenter,

  },
  {
    name: 'battering-ram',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'capped-ram',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'siege-ram',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,

  },
  {
    name: 'scorpion',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'heavy-scorpion',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'siege-tower',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'bombard-cannon',
    positionColumn: positionColumnChildAge,
    isLastOfTech,

  },
  //#endregion
  //#region Blacksmith
  {
    name: 'padded-archer-armor',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'leather-archer-armor',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'ring-archer-armor',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'fletching',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'bodkin-arrow',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'bracer',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'blacksmith',
    positionColumn: positionColumn3,
    svgTechParentSize: '487',
    svgParentPosition: '-312px',

  },
  {
    name: 'forging',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'iron-casting',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'blast-furnace',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'scale-barding-armor',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'chain-barding-armor',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'plate-barding-armor',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'scale-mail-armor',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'chain-mail-armor',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'plate-mail-armor',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLastOfTech,

  },
  //#endregion
  //#region University
  {
    name: 'masonry',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'architecture',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'fortified-wall',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'chemistry',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'bombard-tower',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,

  },
  {
    name: 'ballistics',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'siege-engineers',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'university',
    positionColumn: positionColumn5,
    svgTechParentSize: '428',
    svgParentPosition: '-182px',

  },
  {
    name: 'guard-tower',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'keep',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'heated-shot',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'arrowslits',
    positionColumn: positionColumnChildAge,

  },
  {
    name: 'murder-holes',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'treadmill-crane',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    isLast: last255,
    isLastOfTech,

  },
  //#endregion
  //#region Mining Camp & Lumber Camp
  {
    name: 'mining-camp',
    positionColumn: positionColumn1,
    svgTechParentSize: '72.5',
    svgParentPosition: '-4.25px',
    isAlignCenter,

  },
  {
    name: 'stone-mining',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'stone-shaft-mining',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last385,

  },
  {
    name: 'gold-mining',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'gold-shaft-mining',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last385,
    isLastOfTech,

  },
  {
    name: 'lumber-camp',
    positionColumn: positionColumn1,

  },
  {
    name: 'double-bit-axe',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'bow-saw',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'two-man-saw',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLastOfTech,

  },
  //#endregion
  //#region Mill
  {
    name: 'cartography',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'caravan',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'guilds',
    positionColumn: positionColumnChildAge2,

  },
  {
    name: 'market',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '144.5',
    svgParentPosition: '-40.25px',

  },
  {
    name: 'coinage',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,

  },
  {
    name: 'banking',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,

  },
  {
    name: 'trade-cart',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    isLast: last530,
    isLastOfTech,

  },
  {
    name: 'mill',
    positionColumn: positionColumn1,
    svgTechParentSize: '239',
    svgParentPosition: '-135px',

  },
  {
    name: 'horse-collar',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,

  },
  {
    name: 'heavy-plow',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'crop-rotation',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,

  },
  {
    name: 'farm',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,

  },
  //#endregion
];

export default techData;
