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
    desc: [
      'Create Archer',
      '(Cost: 25 Wood, 45 Gold)',
      'Creation time 35s (Briton ally 29.2s); Basic Archer, strong against slow units.',
      'Hit Pts: 30; Attack 4 (+3 vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 2 (Thumb Ring 1.7); Melee/Pierce Armor: 0/0; Range: 4; Accuracy: 80% (TR 100%); Class: Archers; Attack delay: 0.35s; Speed: 0.96; Line of sight: 6 (Magyar ally 8)',
    ],
  },
  {
    name: 'crossbowman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Crossbowman',
      '(Cost: 25 Wood, 45 Gold)',
      'Creation time 27s (Briton ally 22.5s); Basic Archer, strong against slow units.',
      'Hit Pts: 35; Attack 5 (+3 vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 2 (Thumb Ring 1.7); Melee/Pierce Armor: 0/0; Range: 5; Accuracy: 85% (TR 100%); Class: Archers; Attack delay: 0.35s; Speed: 0.96; Line of sight: 7 (Magyar ally 9)',
    ],
    dontBelongTo: ['Spanish'],
  },
  {
    name: 'arbalest',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Arbalest',
      '(Cost: 25 Wood, 45 Gold)',
      'Creation time 27s (Briton ally 22.5s); Basic Archer, strong against slow units.',
      'Hit Pts: 40; Attack 6 (+3 vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 2 (Thumb Ring 1.7); Melee/Pierce Armor: 0/0; Range: 5; Accuracy: 90% (TR 100%); Class: Archers; Attack delay: 0.35s; Speed: 0.96; Line of sight: 7 (Magyar ally 9)',
    ],
    dontBelongTo: [
      'Berbers',
      'Burmese',
      'Celts',
      'Franks',
      'Goths',
      'Huns',
      'Indians',
      'Khamer',
      'Persians',
      'Slavs',
      'Spanish',
      'Teutons',
      'Turks',
    ],
  },
  {
    name: 'skirmisher',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Skirmisher',
      '(Cost: 25 Food, 35 Wood)',
      'Creation time 22s (Briton ally 18.3s); Good against Archers, Spearmen; weak vs. other units.',
      'Hit Pts: 35; Attack 2 (+3 vs. Archers, +3 vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 3; Melee/Pierce Armor: 0/3; Range: 4 (min: 1); Accuracy: 90% (TR 100%); Class: Archers; Attack delay: 0.35s; Speed: 0.96; Line of sight: 6.',
    ],
  },
  {
    name: 'elite-skirmisher',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Skirmisher',
      '(25 Food, 35 Wood)',
      'Creation time 22s (Briton ally 18.3s); Good against Archers, Spearmen; weak vs. other units.',
      'Hit Pts: 35; Attack 3 (+3 vs. Spear-line, +4 vs. Archers (+2 extra vs. Cavalry Archers)); Reload time: 3; Melee/Pierce Armor: 0/4; Range: 5 (min: 1); Accuracy: 90% (TR 100%); Class: Archers; Attack delay: 0.35s; Speed: 0.96; Line of sight: 7.',
    ],
    dontBelongTo: [
      'Turks'
    ],
  },
  {
    name: 'imperial-skirmisher',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    desc: [
      'Create Imperial Skirmisher',
      '(25 Food, 35 Wood)',
      'Creation time 22s (Briton ally 18.3s); Vietnamese mercenary unit, available when teamed with a Vietnamese player. Good against Archers, Spearmen; weak vs. other units.',
      'Hit Pts: 35; Attack 4 (+5 vs. Archers, +3 extra vs. Cavalry Archers, +3 vs. Spear-line); Reload time: 3; Melee/Pierce Armor: 0/5; Range: 5 (min: 1); Accuracy: 95% (TR 100%); Class: Archers; Attack delay: 0.35s; Speed: 0.96; Line of sight: 7.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vikings'
    ],
  },
  {
    name: 'archery-range',
    positionColumn: positionColumn3,
    isAlignCenter,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '357',
    svgParentPosition: '-146.5px',
    desc: [
      'Build Archery Range',
      '(Cost: 175 Wood)',
      'Construction time 50s; Used to create and improve Archers.',
      'Upgrades: production speed (Castle); Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery)',
      'Hit Pts: 1500; Armor: 1; Pierce Armor: 8; Garrison: 10; Line of sight: 6 (Town Watch/Patrol +4 each)',
    ],
  },
  {
    name: 'cavalry-archer',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Cavalry Archer',
      '(40 Wood, 60 Gold)',
      'Creation time 34s (Briton ally 28.3s); Fast, with ranged attack. Ideal for hit-and-run.',
      'Hit Pts: 50; Attack: 6 (+2 vs. Spear-line [+6 Parthian Tactics]); Reload time: 2 (TR 1.8); Melee/Pierce Armor: 0/0; Range: 4; Accuracy: 50%; Classes: Cavalry, Archers, Cavalry Archers; Attack delay: 0.7s; Speed: 1.4 (1.54); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Mayans'
    ],
  },
  {
    name: 'heavy-cavalry-archer',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    desc: [
      'Create Heavy Cavalry Archer',
      '(40 Wood, 60 Gold)',
      'Creation time 27s (Briton ally 22.5s); Fast, with ranged attack. Ideal for hit-and-run.',
      'Hit Pts: 60; Attack: 7 (+2 vs. Spear-line [+6 Parthian Tactics]); Reload time: 2 (TR 1.8); Melee/Pierce Armor: 1/0; Range: 4; Accuracy: 50% (TR 100%); Classes: Cavalry, Archers, Cavalry Archers; Attack delay: 0.7s; Speed: 1.4 (1.54); Line of sight: 6.',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Italians','Malay','Mayans','Portuguese','Teutons','Vikings'
    ],
  },
  {
    name: 'slinger',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Slinger',
      '(30 Food, 40 Gold)',
      'Creation time 25s (Briton ally 20.8s); Inca unique unit. Archer with strong attack bonus vs. Infantry.',
      'Hit Pts: 40; Attack: 5 (+10 vs. Infantry, +1 extra vs. Spear-line, +2 vs. Rams); Reload time: 2; Melee/Pierce Armor: 0/0 (UT 1/2); Range: 5 (min: 1)(UT: 0); Accuracy: 90% (TR 100%); Classes: Archers, Unique Units; Speed: 0.96; Attack delay: 0.35s; Line of sight: 7 (Magyar ally 9).',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'hand-cannoneer',
    positionColumn: positionColumnChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    desc: [
      'Create Hand Cannoneer',
      '(45 Food, 50 Gold)',
      'Creation time 34s; Strong attack, but inaccurate at range. Very powerful against Infantry.',
      'Hit Pts: 35; Attack: 17 (+10 vs. Infantry, +1 extra vs. Spear-line, +2 vs. Rams); Reload time: 3.45; Melee/Pierce Armor: 1/0; Range: 7 Accuracy: 50%, not affected by Ballistics, TR, range/attack upgrades; Classes: Archers, Gunpowder; Speed: 0.96; Attack delay: 0.35s; Line of sight: 9.',
      'Requires: Chemistry (University).',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Burmese','Celts','Chinese','Ethiopians','Huns','Incas','Magyars','Malay','Mayans','Mongols','Slavs','Vietnamese','Vikings'
    ],
  },
  {
    name: 'genitour',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Genitour',
      '(50 Food, 35 Wood)',
      'Creation time 25s (Briton ally 20.8s); Mounted Skirmisher, available when teamed with a Berber player. Not affected by Parthian Tactics.',
      'Hit Pts: 50; Attack: 3 (+4 vs. Archers); Reload time: 3; Melee/Pierce Armor: 0/3 (+1 against anti-Cavalry Archer dmg); Range: 3 (min: 1); Accuracy: 90% (TR 100%); Classes: Archers, Cavalry, Cavalry Archers, Unique Units; Attack delay: 0.7s; Speed: 1.35 (1.49); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'elite-genitour',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    desc: [
      'Create Elite Genitour',
      '(50 Food, 35 Wood)',
      'Creation time 23s (Briton ally 19.2s); Mounted Skirmisher, available when teamed with a Berber player.',
      'Hit Pts: 55; Attack: 4 (+5 vs. Archers, +2 extra vs. Cavalry Archers); Reload time: 3; Melee/Pierce Armor: 0/4 (+1 against anti-Cavalry Archer dmg); Range: 4 (min: 1); Accuracy: 90% (TR 100%); Classes: Archers, Cavalry, Cavalry Archers, Unique Units; Attack delay: 0.7s; Speed: 1.35 (1.49); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'thumb-ring',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Thumb Ring',
      '(Cost: 300 Food, 250 Wood)',
      'Research time 45s (Briton ally 35.5s) Archers and Cavalry Archers (not Gunpowder units) fire with 100% accuracy against non-moving targets. Cavalry Archers, War Wagons fire 11% faster, Archer-line, Mangudai, Camel Archers, Elephant Archers, Plumed Archers 18% faster, Chu Ko Nu 20% faster',
    ],
    dontBelongTo: [
      'Aztecs',
      'Britons',
      'Burmese',
      'Celts',
      'Franks',
      'Goths',
      'Khamer',
      'Slavs',
      'Teutons',
    ],
  },
  {
    name: 'parthian-tactics',
    positionColumn: positionColumnChildAge2,
    isLast: '135px',
    isLastOfTech,
    dontBelongTo: ['Berbers', 'Franks', 'Persians'],
    desc: [
      'Research Parthian Tactics',
      '(200 Food, 250 Gold)',
      'Research time 1:05 (Briton ally 54s) Mangudai, Cavalry Archer, Elephant Archers have +1 Melee Armor/+2 Pierce Armor; Cavalry Archers have +4, Mangudai and Elephant Archers +2 Attack vs. Spear-line.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Incas','Italians','Koreans','Malay','Malians','Mayans','Portuguese','Slavs','Spanish','Teutons','Vietnamese','Vikings'
    ],
  },
  //#endregion
  //#region Barracks
  {
    name: 'militia',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Militia',
      '(60 Food, 20 Gold)',
      'Creation time 21s (Goth ally 16.8s); Basic Infantry, cheap to create. Man-at-Arms upgrade 100F, 40G (Barracks).',
      'Hit Pts: 40; Attack: 4; Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Class: Infantry; Speed: 0.9 (0.99); Line of sight: 4 (6).',
    ]
  },
  {
    name: 'man-at-arms',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Man-at-Arms',
      '(60 Food, 20 Gold)',
      'Creation time 21s (Goth ally 16.8s); Basic Infantry, cheap to create. Long Swordsman upgrade 200F, 65G (Barracks).',
      'Hit Pts: 45; Attack: 6 (+2 vs. Eagles, +2 (+4) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Class: Infantry; Speed: 0.9 (0.99); Line of sight: 4 (6).',
    ],
  },
  {
    name: 'long-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Long Swordsman',
      '(60 Food, 20 Gold)',
      'Creation time 21s (Goth ally 16.8s); Basic Infantry, cheap to create. Two-Handed Swordsman upgrade 300F, 100G (Barracks).',
      'Hit Pts: 60; Attack: 9 (+6 vs. Eagles, +3 (+5) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Class: Infantry; Speed: 0.9 (0.99); Line of sight: 4 (6).',
    ]
  },
  {
    name: 'two-handed-swordsman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Two-Handed Swordsman',
      '(60 Food, 20 Gold)',
      'Creation time 21s (Goth ally 17.5s); Basic Infantry, cheap to create. Champion upgrade 750F, 300G (Barracks).',
      'Hit Pts: 60; Attack: 12 (+8 vs. Eagles, +4 (+6) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Class: Infantry; Speed: 0.9 (0.99); Line of sight: 5 (7).',
    ],
    dontBelongTo: [
      'Persians'
    ],
  },
  {
    name: 'champion',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Create Champion',
      '(60 Food, 20 Gold)',
      'Creation time 21s (Goth ally 16.8s); Basic Infantry, cheap to create.',
      'Hit Pts: 70; Attack: 13 (+8 vs. Eagles, +4 (+6) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 1/1; Range: 0; Class: Infantry; Speed: 0.9 (0.99); Line of sight: 5 (7).',
    ],
    dontBelongTo: [
      'Ethiopians','Huns','Khamer','Malay','Mayans','Persians',
    ],
  },
  {
    name: 'spearman',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Spearman',
      '(35 Food, 25 Wood)',
      'Creation time 22s (Goth ally 18.3s); Strong against Cavalry, weak against other units. Pikeman upgrade 215F, 90G (Barracks).',
      'Hit Pts: 45; Attack: 3 (+15 vs. Cavalry, +15 extra vs. Elephants, +12 vs. Camels, +9 vs. Ships, +1 vs. Eagles, +1 (+3) vs. Buildings); Reload time: 3; Melee/Pierce Armor: 0/0; Range: 0; Classes: Infantry, Spearmen; Speed: 1 (1.1) Line of sight: 4 (6).',
    ],
  },
  {
    name: 'pikeman',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Pikeman',
      '(35 Food, 25 Wood)',
      'Creation time 22s (Goth ally 18.3s); Strong against Cavalry, weak against other units. Halberdier upgrade 300F, 600G (Barracks).',
      'Hit Pts: 35 Food; Attack: 4 (+22 vs. Cavalry, +25 extra vs. Elephants, +18 vs. Camels, +16 vs. Ships, +1 vs. Eagles, +1 (+3) vs. Buildings); Reload time: 3; Melee/Pierce Armor: 0/0; Range: 0; Classes: Infantry, Spearmen; Speed: 1 (1.1); Line of sight: 4 (6).',
    ],
    dontBelongTo: [
      'Turks',
    ],
  },
  {
    name: 'halberdier',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last135,
    desc: [
      'Create Halberdier',
      '(35 Food, 25 Wood)',
      'Creation time 22s (Goth ally 18.3s); Strong against Cavalry, weak against other units.',
      'Hit Pts: 60; Attack: 6 (+32 vs. Cavalry, +28 extra vs. Elephants, +26 vs. Camels, +17 vs. Ships, +1 vs. Eagles, +1 (+3) vs. Buildings); Reload time: 3; Melee/Pierce Armor: 0/0; Range: 0; Classes: Infantry, Spearmen; Speed: 1 (1.1); Line of sight: 4 (6).',
    ],
    dontBelongTo: [
      'Aztecs','Italians','Malians','Mongols','Saracens','Turks','Vikings'
    ],
  },
  {
    name: 'barracks',
    positionColumn: positionColumn1,
    svgTechParentSize: '795',
    svgParentPosition: '-383px',
    desc: [
      'Build Barracks',
      '(175 Wood)',
      'Construction time 50s; Used to create and improve Infantry. Required for Archery Range, Stable. Upgrades: production speed (Castle); Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 1200; Armor: 0; Pierce Armor: 7; Garrison: 10; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'eagle-scout',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Eagle Scout',
      '(20 Food, 50 Gold)',
      'Creation time 1:00 (Goth ally 50s, Castle Age 35s); Fast Infantry with good Pierce Armor and LoS.',
      'Hit Pts: 50 ; Attack: 4 (+8 vs. Monks, +3 vs. Siege Weapons) Castle Age: +3 Attack, +2 vs. Cavalry, +1 vs. Camels,Ships; Reload time: 2; Melee/Pierce Armor: 0/2; Range: 0 Classes: Infantry, Eagle Warriors; Speed: 1.1 (1.21); Line of sight: 6 (8).',
    ],
    dontBelongTo: [
      'Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'eagle-warrior',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Eagle Warrior',
      '(20 Food, 50 Gold)',
      'Creation time 35s (Goth ally 26.7s); Fast Infantry with good Pierce Armor and LoS.',
      'Hit Pts: 55; Attack: 7 (+8 vs. Monks, +3 vs. Siege Weapons, +3 vs. Cavalry, +2 vs. Camels, +1 vs. Ships); Reload time: 2; Melee/Pierce Armor: 0/3; Range: 0; Classes: Infantry, Eagle Warriors; Speed: 1.15 (1.27); Line of sight: 6 (8); Resistant to conversion (~5% chance of conversion/s).',
    ],
    dontBelongTo: [
      'Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'elite-eagle-warrior',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Elite Eagle Warrior',
      '(20 Food, 50 Gold)',
      'Creation time 20s (Goth ally 16.7s); Fast Infantry with good Pierce Armor and LoS.',
      'Hit Pts: 60; Attack: 9 (+10 vs. Monks, +5 vs. Siege Weapons, +4 vs. Cavalry, +3 vs. Camels, +2 vs. Ships); Reload time: 2; Melee/Pierce Armor: 0/4; Range: 0; Classes: Infantry, Eagle Warriors; Speed: 1.3 (1.43); Line of sight: 6 (8); Resistant to conversion (~5% chance of conversion/s).',
    ],
    dontBelongTo: [
      'Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'tracking',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Tracking',
      '(50 Food)',
      'Research time 35s (Goth ally 29.2s)Infantry have +2 line of sight so they see enemies from a longer distance.',
    ],
  },
  {
    name: 'squires',
    positionColumn: positionColumnChildAge2,
    desc: [
      'Research Squires',
      '(100 Food)',
      'Research time 40s (Goth ally 33s)Infantry move 10% faster.',
    ],
    dontBelongTo: [
      'Celts','Khamer','Magyars','Portuguese',
    ],
  },
  {
    name: 'condottiero',
    positionColumn: positionColumnChildAge2,
    desc: [
      'Create Condottiero',
      '(50 Food, 35 Gold)',
      'Creation time 18s (Goth ally 9.2s); Italian mercenary unit, available when teamed with an Italian player. Fast Infantry with bonus against Gunpowder.',
      'Hit Pts: 80; Attack: 9 (+10 vs. Gunpowder, +2 (+4) vs. Buildings); Reload time: 1.9; Melee/Pierce Armor: 1/0; (+10 Armor against Hand Cannoneer damage); Range: 0; Classes: Infantry, Unique Units; Speed: 1.2; Line of sight: 6 (8).',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'arson',
    positionColumn: positionColumn5,
    svgSize: '452',
    isLastOfTech,
    desc: [
      'Research Arson',
      '(150 Food, 50 Gold)',
      'Research time 25s (Goth ally 21)Infantry +2 damage vs. Buildings.',
    ],
  },
  //#endregion
  //#region Stable
  {
    name: 'bloodlines',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Bloodlines',
      '(150 Food, 100 Gold)',
      'Research time 50s (Hun ally 42s)Mounted units have +20 hit points.',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Byzantines','Celts','Ethiopians','Franks','Incas','Koreans','Malay','Mayans','Vikings'
    ],
  },
  {
    name: 'camel',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Camel',
      '(55 Food, 60 Gold)',
      'Creation time 22s (Hun ally 18.3s); Weaker than the knight, but excels against Cavalry. Heavy Camel upgrade 325F, 360G (Stable).',
      'Hit Pts: 100; Attack: 6 (+9 vs. Cavalry, +5 vs. Camels,Ships, Indian ally: +6 vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 0; Class: Camels; Speed: 1.45 (1.6); Line of sight: 4.',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Burmese','Celts','Franks','Goths','Huns','Incas','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Mayans','Portuguese','Slavs','Spanish','Teutons','Vietnamese','Vikings'
    ],
  },
  {
    name: 'heavy-camel',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Heavy Camel',
      '(55 Food, 60 Gold)',
      'Creation time 22s (Hun ally 18.3s); Weaker than the cavalier, but excels against Cavalry.',
      'Hit Pts: 120; Attack: 7 (+18 vs. Cavalry, +9 vs. Camels,Ships, Indian ally: +6 vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 0; Class: Camels; Speed: 1.45 (1.6); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Burmese','Celts','Franks','Goths','Huns','Incas','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Mayans','Portuguese','Slavs','Spanish','Teutons','Vietnamese','Vikings'
    ],
  },
  {
    name: 'imperial-camel',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Create Imperial Camel',
      '(55 Food, 60 Gold)',
      'Creation time 20s (Hun ally 16.7s); Weaker than the Paladin, but excels against Cavalry.',
      'Hit Pts: 140; Attack: 9 (+18 vs. Cavalry, +9 vs. Camels,Ships, +6 Attack vs. Buildings); Reload time: 2; Melee/Pierce Armor: 1/1; Range: 0; Class: Camels; Speed: 1.45 (1.6); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'knight',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Knight',
      '(60 Food, 75 Gold)',
      'Creation time 30s (Hun ally 25s); Fast and heavy Cavalry, costly but powerful. Cavalier upgrade 300F, 300G (Stable).',
      'Hit Pts: 100; Attack: 10 (Persian ally: +2 vs. Archers); Reload time: 1.8; Melee/Pierce Armor: 2/2; Range: 0; Class: Cavalry; Speed: 1.35 (1.49); Line of sight: 4 (Frank ally 6).',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Indians','Mayans',
    ],
  },
  {
    name: 'cavalier',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Cavalier',
      '(60 Food, 75 Gold)',
      'Creation time 30s (Hun ally 25s); Fast and heavy Cavalry, costly but powerful. Paladin upgrade 1300F, 750G (Stable).',
      'Hit Pts: 120; Attack: 12 (Persian ally: +2 vs. Archers); Reload time: 1.8; Melee/Pierce Armor: 2/2; Range: 0; Class: Cavalry; Speed: 1.35 (1.49); Line of sight: 4 (Frank ally 6).',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Indians','Mayans','Saracens',
    ],
  },
  {
    name: 'paladin',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Create Paladin',
      '(60 Food, 75 Gold)',
      'Creation time 30s (Hun ally 25s); Fast and heavy Cavalry, costly but powerful.',
      'Hit Pts: 160; Attack: 14 (Persian ally: +2 vs. Archers); Reload time: 1.9; Melee/Pierce Armor: 2/3; Range: 0; Class: Cavalry; Speed: 1.35 (1.49); Line of sight: 5 (Frank ally 7).',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Chinese','Ethiopians','Goths','Incas','Indians','Italians','Japanese','Khamer','Koreans','Malay','Malians','Mayans','Mongols','Portuguese','Saracens','Slavs','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'stable',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '286',
    svgParentPosition: '-111px',
    desc: [
      'Build Stable',
      '(175 Wood)',
      'Construction time 50s; Used to create and improve Cavalry. Upgrades: production speed (Castle); Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 1500; Armor: 1; Pierce Armor: 8; Garrison: 10; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Mayans'
    ],
  },
  {
    name: 'scout-cavalry',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Scout Cavalry',
      '(80 Food)',
      'Creation time 30s (Hun ally 25s); Fast, cheap Cavalry with extensive LoS. Light Cavalry upgrade 150F, 50G (Stable).',
      'Hit Pts: 45; Attack: 3+2 (+6 vs. Monks); Reload time: 2; Melee/Pierce Armor: 0/2; Range: 0; Class: Cavalry; Speed: 1.55 (1.71); Line of sight: 6 (Mongol ally 8) Resistant to conversion (~5% chance of conversion/s).',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Mayans'
    ],
  },
  {
    name: 'light-cavalry',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Light Cavalry',
      '(80 Food)',
      'Creation time 30s (Hun ally 25s); Fast, cheap Cavalry with extensive LoS. Hussar upgrade 500F, 600G (Stable).',
      'Hit Pts: 60; Attack: 7 (+10 vs. Monks); Reload time: 2; Melee/Pierce Armor: 0/2; Range: 0; Class: Cavalry; Speed: 1.5 (1.65); Line of sight: 8 (Mongol ally 10) Resistant to conversion (~5% chance of conversion/s).',
    ],
    dontBelongTo: [
      'Aztecs','Incas',,'Mayans','Teutons'
    ],
  },
  {
    name: 'hussar',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Hussar',
      '(80 Food)',
      'Creation time 30s (Hun ally 25s); Fast, cheap Cavalry with extensive LoS.',
      'Hit Pts: 75; Attack: 7 (+12 vs. Monks); Reload time: 1.9; Melee/Pierce Armor: 0/2; Range: 0; Class: Cavalry; Speed: 1.5 (1.65); Line of sight: 10 (Mongol ally 12 )Resistant to conversion (~5% chance of conversion/s).',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Japanese','Khamer','Malay','Malians','Mayans','Portuguese','Teutons','Vietnamese','Vikings'
    ],
  },
  {
    name: 'battle-elephant',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Create Battle Elephant',
      '(120 Food, 70 Gold)',
      'Creation time 28s; Slow and heavy cavalry, weak to Halbs and Monks.',
      'Hit Pts: 250; Attack: 12 (+7 vs. Buildings, +7 extra vs. Stone Defense), Blast damage: Attack/2, Blast Radius: 0.4; Reload time: 2; Melee/Pierce Armor: 1/2; Range: 0; Classes: Cavalry, Elephants; Speed: 0.85 (0.94); Line of sight: 4.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Koreans','Magyars','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vikings'
    ],
  },
  {
    name: 'elite-battle-elephant',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Create Elite Battle Elephant',
      '(120 Food, 70 Gold)',
      'Creation time 28s; Slow and heavy cavalry, weak to Halbs and Monks.',
      'Hit Pts: 300; Attack: 16 (+10 vs. Buildings, +10 extra vs. Stone Defense), Blast damage: Attack/2, Blast Radius: 0.4; Reload time: 2; Melee/Pierce Armor: 1/3; Range: 0; Classes: Cavalry, Elephants; Speed: 0.85 (0.94); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Koreans','Magyars','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vikings'
    ],
  },
  {
    name: 'husbandry',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    isLast: last255,
    isLastOfTech,
    desc: [
      'Research Husbandry',
      '(150 Food)',
      'Research time 40s (Hun ally 33s) Cavalry (except Missionaries) move 10% faster.',
    ],
    dontBelongTo: [
      'Aztecs','Incas','Mayans','Teutons','Vietnamese','Vikings'
    ],
  },
  //#endregion
  //#region Wonder
  {
    name: 'wonder',
    positionColumn: positionColumn7,
    isLastOfTech,
    desc: [
      'Build Wonder',
      '(1000 Wood, 1000 Stone, 1000 Gold)',
      'Construction time 58:20 (Treadmill Crane/Spanish 48:37) Building a Wonder demonstrates the superiority of your civilization. Constructing a Wonder that stands for 400 years is one way to win the game (not on conquest setting). Cannot be converted by enemy Monks. Enemies will see the construction site and get notifications.',
      'Hit Pts: 4800; Armor: 3; Pierce Armor: 10; Line of sight: 8 (Town Watch/Patrol +4 each).',
    ],
  },
  //#endregion
  //#region Dock
  {
    name: 'fishing-ship',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Fishing Ship',
      '(75 Wood)',
      'Creation time 40s; Gathering speed: deep fish 0.49 F/s , shore fish 0.28 F/s, Fish Traps 0.31 F/s.',
      'Hit Pts: 60; Attack: 0; Melee/Pierce Armor: 0/4; Class: Ships; Speed: 1.26 (1.45) Line of sight: 5.',
    ],
  },
  {
    name: 'trade-cog',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Build Trade Cog',
      '(100 Wood, 50 Gold)',
      'Creation time 36s; Trade Carts should be built instead of Trade Cogs in most cases, as extra docks for military production can mess up the water tradeline.',
      'Hit Pts: 80; Attack: 0; Melee/Pierce Armor: 0/6; Class: Ships; Speed: 1.32 (1.98 Caravan) (2.28 + Dry Dock); Line of sight: 6.',
    ],
  },
  {
    name: 'careening',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Careening',
      '(250 Food, 150 Gold)',
      'Research time 50s; Ships have +1 Pierce Armor. Transport Ships carry +5 units.',
    ],
  },
  {
    name: 'dry-dock',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Dry Dock',
      '(600 Food, 400 Gold)',
      'Research time 1:00; Ships move 15% faster. Transport Ships carry +10 units. Trade Cog gold generation rate remains the same as they get less gold per trip.',
    ],
    dontBelongTo: [
      'Goths','Mongols','Teutons'
    ],
  },
  {
    name: 'transport-ship',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Transport Ship',
      '(125 Wood)',
      "Creation time 46s; Used to transport land units over water, can't defend itself.",
      'Hit Pts: 100; Attack: 0; Base capacity: 5 population; Melee/Pierce Armor: 4/8; Class: Ships; Speed: 1.45 (1.67) Line of sight: 5.',
    ],
  },
  {
    name: 'fire-galley',
    positionColumn: positionColumnChildAge,
    desc: [
      'Build Fire Galley',
      '(75 Wood, 45 Gold)',
      'Creation time 1:00; Powerful against other ships, but small range. Fire Ship/ War Galley upgrade 230F, 100G (Dock).',
      'Hit Pts: 100; Attack: 1 Pierce (+3 vs. Ships, +1 extra vs. Turtle Ships, +1 vs. Buildings); Reload time: 0.25; Melee/Pierce Armor: 0/4; (+6 vs. anti-Ship dmg); Range: 2.5; Class: Ships; Speed: 1.3; Line of sight: 5.',
    ],
    dontBelongTo: [
      'Vikings'
    ],
  },
  {
    name: 'fire-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Fire Ship',
      '(75 Wood, 45 Gold)',
      'Creation time 36s; Powerful against other ships, but small range.',
      'Hit Pts: 120; Attack: 2 Pierce + 1 Melee  (+3 vs. Ships, +2 extra vs. Turtle Ships, +2 vs. Buildings); Reload time: 0.25; Melee/Pierce Armor: 0/6; (+6 vs. anti-Ship dmg); Range: 2.5; Class: Ships; Speed: 1.35 (1.55); Line of sight: 5.',
    ],
    dontBelongTo: [
      'Vikings'
    ],
  },
  {
    name: 'fast-fire-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Fast Fire Ship',
      '(75 Wood, 45 Gold)',
      'Creation time 36s; Powerful against other ships, but small range.',
      'Hit Pts: 140; Attack: 3 Pierce + 1 Melee  (+4 vs. Ships, +3 extra vs. Turtle Ships, +3 vs. Buildings); Reload time: 0.25; Melee/Pierce Armor: 0/8; (+9 vs. anti-Ship dmg); Range: 2.5; Class: Ships; Speed: 1.43 (1.64); Line of sight: 6.',
    ],
    dontBelongTo: [
      'Burmese','Celts','Chinese','Ethiopians','Huns','Indians','Malians','Portuguese','Saracens','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'galley',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Build Galley',
      '(90 Wood, 30 Gold)',
      'Creation time 1:00; Basic Ship with ranged attack. War Galley upgrade 230F, 100G (Dock).',
      'Hit Pts: 120; Attack: 6 (+8 vs. Ships, +6 vs. Buildings, +3 vs. Rams); Reload time: 3; Melee/Pierce Armor: 0/6; Range: 5; Class: Ships; Speed: 1.43 (1.64); Line of sight: 7 (Japanese ally 10).',
    ],
  },
  {
    name: 'war-galley',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build War Galley',
      '(90 Wood, 30 Gold)',
      'Creation time 36s; Basic Ship with ranged attack. Galleon upgrade 400F, 315G (Dock).',
      'Hit Pts: 135; Attack: 7 (+9 vs. Ships, +7 vs. Buildings, +4 vs. Rams); Reload time: 3; Melee/Pierce Armor: 0/6; Range: 6; Class: Ships; Speed: 1.43; Line of sight: 8 (Japanese ally 12).',
    ],
  },
  {
    name: 'galleon',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last135,
    desc: [
      'Build Galleon',
      '(90 Wood, 30 Gold)',
      'Creation time 36s; Basic Ship with ranged attack.',
      'Hit Pts: 165; Attack: 8 (+11 vs. Ships, +8 vs. Buildings, +4 vs. Rams); Reload time: 3 Melee/Pierce Armor: 0/8; Range: 7; Class: Ships; Speed: 1.43 (1.64); Line of sight: 9 (Japanese ally 13).',
    ],
    dontBelongTo: [
      'Aztecs'
    ],
  },
  {
    name: 'dock',
    positionColumn: positionColumn1,
    isAlignCenter,
    svgTechParentSize: '499.5',
    svgParentPosition: '-217.75px',
    desc: [
      'Build Dock',
      '(150 Wood)',
      'Construction time 35s; Used to build and improve ships, deposit food from Fishing Ships, and trade with other players by sea. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 1800; Armor: 0; Pierce Armor: 7; Garrison: 10; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'demolition-raft',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Build Demolition Raft',
      '(70 Wood, 50 Gold)',
      'Creation time 45s; Detonates to damage massed enemy ships or land units crossing shallows. Demolition Ship/ War Galley upgrade 230F, 100G (Dock).',
      'Hit Pts: 45; Attack: 90 Melee (+180 vs. Buildings), Blast Radius: 2.5; Melee/Pierce Armor: 0/2; (+1 vs. anti-Ship dmg); Range: 0; Class: Ships; Speed: 1.5; Line of sight: 6.',
    ],
    dontBelongTo: [
      'Koreans'
    ],
  },
  {
    name: 'demolition-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Demolition Ship',
      '(70 Wood, 50 Gold)',
      'Creation time 31s; Detonates to damage massed enemy ships or land units crossing shallows. Heavy Demolition Ship upgrade 200W, 300G (Dock).',
      'Hit Pts: 60; Attack: 110 Melee (+220 vs. Buildings), Blast Radius: 2.5; Melee/Pierce Armor: 0/3; (+3 vs. anti-Ship dmg); Range: 0; Accuracy: 100%; Class: Ships; Speed: 1.6 (1.84); Line of sight: 6.',
    ],
    dontBelongTo: [
      'Koreans'
    ],
  },
  {
    name: 'heavy-demo-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Heavy Demolition Ship',
      '(70 Wood, 50 Gold)',
      'Creation time 31s; Detonates to damage massed enemy ships or land units crossing shallows.',
      'Hit Pts: 70; Attack: 140 Melee (+280 vs. Buildings), Blast Radius: 3.5; Melee/Pierce Armor: 0/5; (+5 vs. anti-Ship dmg); Range: 0; Class: Ships; Speed: 1.6 (1.84); Line of sight: 6.',
    ],
    dontBelongTo: [
      'Aztecs','Burmese','Ethiopians','Incas','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Slavs',
    ],
  },
  {
    name: 'gillnets',
    positionColumn: positionColumn5,
    svgSize: '452',
    desc: [
      'Research Gillnets',
      '(150 Food, 200 Wood)',
      'Research time 45s; Fishing Ships gather +25% faster.',
    ],
  },
  {
    name: 'cannon-galleon',
    positionColumn: positionColumnChildAge2,
    desc: [
      'Build Cannon Galleon',
      '(200 Wood, 150 Gold)',
      'Creation time 46s (Turk ally: 36.8s); Warship with long range but low fire rate. Powerful against Buildings on the shore, but weak to other ships.',
      'Hit Pts: 120; Attack: 35 (+200 vs. Buildings, +40 vs. Siege Weapons, +15 vs. Archers, Cavalry and Infantry); Reload time: 10; Melee/Pierce Armor: 0/6; Range: 13; Classes: Ships, Gunpowder; Speed: 1.1 (1.27); Line of sight: 15.',
    ],
    dontBelongTo: [
      'Aztecs','Huns','Incas','Mayans'
    ],
  },
  {
    name: 'elite-cannon-galleon',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Build Elite Cannon Galleon',
      '(200 Wood, 150 Gold)',
      'Creation time 46s (Turk ally: 36.8s); Warship with long range but low fire rate. Powerful against Buildings on the shore, but weak to other ships.',
      'Hit Pts: 150; Attack: 45 (+275 vs. Buildings, +40 vs. Siege Weapons, +15 vs. Archers, Cavalry and Infantry); Reload time: 10; Melee/Pierce Armor: 0/8; Range: 15; Classes: Ships, Gunpowder; Speed: 1.1 (1.27); Line of sight: 17.',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Koreans','Magyars','Malians','Mayans','Mongols','Slavs','Teutons',
    ],
  },
  {
    name: 'shipwright',
    positionColumn: positionColumn7,
    svgSize: '711',
    desc: [
      'Research Shipwright',
      '(1000 Food, 300 Gold)',
      'Research time 1:00; Ships cost 20% less wood; are created ~54% faster.',
    ],
    dontBelongTo: [
      'Berbers','Burmese','Franks','Huns','Indians','Malians','Persians','Portuguese','Saracens','Slavs','Teutons','Vietnamese','Vikings'
    ],
  },
  {
    name: 'empty',
    positionColumn: positionColumn3,
  },
  {
    name: 'koreans-turtle-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: '452',
    desc: [
      'Build Turtle Ship',
      '(180 Wood, 180 Gold)',
      'Creation time 50s (Shipwright 32.5s); Heavily armored, good against other ships.',
      'Hit Pts: 200; Attack: 50 Melee; Reload time: 6; Melee/Pierce Armor: 6/5; (+8 Armor against anti-Ship dmg); Range: 6; Accuracy: 100%; Classes: Ships, Turtle Ship, Unique Units; Speed: 0.9 (UT+Dry Dock 1.19); Line of sight: 8.',
    ],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-elite-turtle-ship',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Elite Turtle Ship',
      '(180 Wood, 180 Gold)',
      'Creation time 50s (Shipwright 32.5s); Heavily armored, good against other ships.',
      'Hit Pts: 300; Attack: 50, Melee; Reload time: 6; Melee/Pierce Armor: 8/6; (+11 Armor against anti-Ship/+1 against anti-Turtle dmg); Range: 6; Accuracy: 100%; Classes: Ships, Unique Units, Turtle Ship; Speed: 0.9 (UT+Dry Dock 1.19); Line of sight: 8.',
    ],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'vikings-longboat',
    positionColumn: positionColumnChildAge2,
    svgSize: '452',
    desc: [
      'Build Longboat',
      '(100 Wood, 50 Gold)',
      'Creation time 25s; Fast warship which fires multiple arrows. Elite Longboat upgrade 750F, 475G (Dock).',
      'Hit Pts: 130; Attack: 7 (+9 vs. Ships, +7 vs. Buildings, +4 vs. Rams) + 3x 1 dmg arrows; Reload time: 3.3; Melee/Pierce Armor: 0/6; Range: 6; Accuracy: 100%; Classes: Ships, Unique Units; Speed: 1.54 (1.77); Line of sight: 8.',
    ],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-elite-longboat',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Elite Longboat',
      '(100 Wood, 50 Gold)',
      'Creation time 25s; Fast warship which fires multiple arrows.',
      'Hit Pts: 160; Attack: 8 (+11 vs. Ships, +8 vs. Buildings, +4 vs. Rams) + 3x 1 dmg arrows; Reload time: 3.3; Melee/Pierce Armor: 0/8; Range: 7; Accuracy: 100%; Classes: Ships, Unique Units; Speed: 1.54 (1.77); Line of sight: 9.',
    ],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'fish-trap',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    isLastOfTech,
    isLast: last650,
    desc: [
      'Build Fish Trap',
      '(100 Wood)',
      'Construction time 53s; Contains 715 food.',
      'Hit Pts: 50; Armor: 0; Pierce Armor: 0; Garrison: 0; Line of sight: 1 (Town Watch/Patrol +4 each).',
    ],
  },
  //#endregion
  //#region Towers and Walls
  {
    name: 'outpost',
    positionColumn: positionColumn1,
    desc: [
      'Build Outpost',
      '(25 Wood, 5 Stone)',
      'Construction time 15s; A stationary watch point that provides advance warning of nearby enemy activity. Unlike other Towers, Outposts do not attack or let you garrison units inside.',
      'Hit Pts: 500; Attack: 0; Armor: 0; Pierce Armor: 0; Garrison: 0; Line of sight: 5, +2 per Age (Town Watch/Patrol +4 each) (Ethiopian ally +3).',
    ],
  },
  {
    name: 'watch-tower',
    positionColumn: positionColumnChildAge2,
    desc: [
      'Build Watch Tower',
      '(25 Wood, 125 Stone)',
      'Construction time 1:20 Units can garrison inside for protection and additional arrows. Guard Tower upgrade 100F, 250W (University).',
      'Hit Pts: 1020; Attack: 5 (+7 vs. Ships, +1 vs. Camels, +2 vs. Spear-line. Additional arrows +5 vs. Stone Defense); Armor: 1; Pierce Armor: 7; Range: 8 (min: 1); Classes: Buildings, Stone Defense; Garrison: 5; LoS: 10 (Town Watch/Patrol +4) (Ethiopian ally +3).',
    ],
  },
  {
    name: 'guard-tower-building',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Guard Tower',
      '(25 Wood, 125 Stone)',
      'Construction time 1:20; Units can garrison inside for protection and additional arrows. Keep upgrade 500F, 350W (University).',
      'Hit Pts: 1500; Attack: 7 (+9 vs. Ships, +1 vs. Camels, +2 vs. Spear-line. Additional arrows +5 vs. Stone Defense); Armor: 2; Pierce Armor: 8; Range: 8 (min: 1); Classes: Buildings, Stone Defense; Garrison: 5; LoS: 10 (Town Watch/Patrol +4) (Ethiopian ally +3).',
      'Requires: Guard Tower (University).',
    ],
    dontBelongTo: [
      'Goths','Huns',
    ],
  },
  {
    name: 'keep-building',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Build Keep',
      '(25 Wood, 125 Stone)',
      'Construction time 1:20; Units can garrison inside for protection and additional arrows.',
      'Hit Pts: ; Attack: (+10 vs. Ships, +1 vs. Camels, +2 vs. Spear-line. Additional arrows +5 against Stone Defense); Armor: 3; Pierce Armor: 9; Range: 8 (min: 1); Classes: Buildings, Stone Defense; Garrison: 5; LoS: 10 (Town Watch/Patrol +4) (Ethiopian ally +3).',
      'Requires: Keep (University).',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Franks','Goths','Huns','Indians','Magyars','Mongols','Persians','Slavs','Vikings'
    ],
  },
  {
    name: 'bombard-tower-building',
    positionColumn: positionColumnChild,
    svgSize: '0',
    desc: [
      'Build Bombard Tower',
      '(125 Stone, 100 Gold)',
      'Construction time 1:20; Tower with powerful attack but slow rate of fire.',
      'Hit Pts: 2220; Attack: 120 Pierce, (+40 vs. Ships, +1 vs. Camels); Armor: 9; Pierce Armor: 9; Range: 8 (min: 1) Affected by range upgrades, Ballistics; Classes: Buildings, Stone Defense, Gunpowder; Garrison: 5; Line of sight: 10 (Town Watch/Patrol +4) (Ethiopian ally +3).',
      'Requires: Bombard Tower (University).',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Celts','Ethiopians','Franks','Goths','Huns','Incas','Indians','Japanese','Khamer','Magyars','Malians','Mayans','Mongols','Persians','Saracens','Slavs','Vikings'
    ],
  },
  {
    name: 'palisade-wall',
    positionColumn: positionColumn1,
    desc: [
      'Build Palisade Wall',
      '(2 Wood)',
      'Construction time 5s; Wooden wall that is cheap and easy to build. Slows down your enemies and warns you of their approach. Upgrades: Line of sight (Town Center); hit points, Armor (University).',
      'Hit Pts: 250; Armor: 2; Pierce Armor: 5; Line of sight: 2 (Town Watch/Patrol +4 each); Classes: Buildings, Walls+Gates.',
    ],
  },
  {
    name: 'palisade-gate',
    positionColumn: positionColumnChild,
    desc: [
      'Build Palisade Gate',
      '(20 Wood)',
      'Construction time 30s; Can be built into existing walls (Without getting those resources back). You or your allies can manually open and close this Gate.',
      'Hit Pts: 400; Armor: 0; Pierce Armor: 6; Line of sight: 6 (Town Watch/Patrol +4 each); Classes: Buildings, Walls+Gates.',
    ],
  },
  {
    name: 'gate',
    positionColumn: positionColumnChildAge,
    desc: [
      'Build Gate',
      '(30 Stone)',
      'Construction time 1:10; Can be built into existing walls (Without getting those resources back). You or your allies can manually open and close this Gate. 2x HP in Castle Age.',
      'Hit Pts: 1375; Armor: 10; Pierce Armor: 10; (+20 against Building bonus dmg from Siege Weapons); Line of sight: 6 (Town Watch/Patrol +4 each); Classes: Buildings, Walls+Gates, Stone Defense.',
    ],
    dontBelongTo: [
      'Goths'
    ],
  },
  {
    name: 'stone-wall',
    positionColumn: positionColumnChild,
    desc: [
      'Build Stone Wall',
      '(5 Stone)',
      'Construction time 10s; Stronger than Palisade Wall but more expensive. Slows down your enemies so you have a chance to fend them off. 2x HP in Castle Age.',
      'Hit Pts: 900; Armor: 8; Pierce Armor: 10 (+16 against Building bonus dmg from Siege Weapons); Line of sight: 2 (Town Watch/Patrol +4 each); Classes: Buildings, Walls+Gates, Stone Defense.',
    ],
    dontBelongTo: [
      'Goths'
    ],
  },
  {
    name: 'fortified-wall-building',
    positionColumn: positionColumnChildAge,
    isLastOfTech,
    desc: [
      'Build Fortified Wall',
      '(5 Stone)',
      'Construction time 10s; Stronger than Stone Wall. Difficult to breach without Siege Weapons. Upgrading Fortified Walls also increases the hit points of your Gates.',
      'Hit Pts: 3000; Armor: 12; Pierce Armor: 12; (+24 against Building bonus dmg from Siege Weapons); Line of sight: 2 (Town Watch/Patrol +4 each); Classes: Walls+Gates, Stone Defense',
    ],
    dontBelongTo: [
      'Goths','Huns','Magyars','Malay','Persians'
    ],
  },
  //#endregion
  //#region Monastery
  {
    name: 'redemption',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Redemption',
      '(475 Gold)',
      'Research time 50s; Monks can convert enemy Buildings (except Town Centers, Castles, Monasteries, Farms, Fish Traps, Walls, Gates, and Wonders) and Siege Weapons. Monks can convert most enemy units from a distance, but they must stand adjacent to Buildings, Rams, and Trebuchets to convert them.',
    ],
    dontBelongTo: [
      'Britons','Celts','Ethiopians','Franks','Goths','Huns','Koreans','Magyars','Mayans','Mongols','Persians','Vietnamese','Vikings'
    ],
  },
  {
    name: 'block-printing',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Block Printing',
      '(200 Gold)',
      'Research time 55s; Monks have +3 conversion range.',
    ],
    dontBelongTo: [
      'Berbers','Celts','Chinese','Ethiopians','Goths','Huns','Khamer','Mongols','Turks'
    ],
  },
  {
    name: 'fervor',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Fervor',
      '(140 Gold)',
      'Research time 50s; Monks move 15% faster.',
    ],
    dontBelongTo: [
      'Incas','Malay','Vietnamese'
    ],
  },
  {
    name: 'illumination',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Illumination',
      '(120 Gold)',
      'Research time 1:05; Monks regain their faith 87.5% faster after a successful conversion (3%/s instead of 1.6%/s). This means they can convert again after 34s instead of 63s.',
    ],
    dontBelongTo: [
      'Celts','Koreans','Malians','Mayans','Mongols','Persians','Portuguese','Turks','Vikings'
    ],
  },
  {
    name: 'sancitity',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Sanctity',
      '(120 Gold)',
      'Research time 1:00; Monks get +15 hit points so they are harder to kill.',
    ],
    dontBelongTo: [
      'Berbers','Mongols','Vikings'
    ],
  },
  {
    name: 'faith',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Faith',
      '(750 Food, 1000 Gold)',
      'Research time 1:00; units/buildings resist conversion: min. conversion time +2s, max. conversion time +5s, conversion chance reduced by 66%.',
    ],
    dontBelongTo: [
      'Khamer','Magyars','Slavs'
    ],
  },
  {
    name: 'monastery',
    positionColumn: positionColumn5,
    svgTechParentSize: '425',
    svgParentPosition: '-180.5px',
    desc: [
      'Build Monastery',
      '(175 Wood)',
      'Construction time 40s; Used to create and improve Monks. Garrisoned relics generate gold (1G/2s). Cannot be converted by enemy Monks. Upgrades: Line of sight (Town Center); hit points, Armor (University).',
      'Hit Pts: 2100; Armor: 0; Pierce Armor: 7; Garrison: 10; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'atonement',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Atonement',
      '(325 Gold)',
      'Research time 40s; Monks can convert enemy Monks.',
    ],
    dontBelongTo: [
      'Britons','Celts','Franks','Goths','Incas','Indians','Khamer','Koreans','Magyars','Persians'
    ],
  },
  {
    name: 'theocracy',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Theocracy',
      '(200 Gold)',
      'Research time 1:15; If a group of Monks converts an enemy unit, only one of the Monks loses faith, all others can immediately convert again.',
    ],
    dontBelongTo: [
      'Celts','Huns','Malay','Mongols','Vikings'
    ],
  },
  {
    name: 'monk',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Monk',
      '(100 Gold)',
      'Creation time 51s; Slow and weak. Converts enemy units to your control.',
      'Hit Pts: ; Melee/Pierce Armor: 0/0; Range: 9 (12); LoS: 11 (14); Speed: 0.7; Unit min/max conversion time: 5s/12s, 28% chance of conversion/1.2s;Building min/max conv. time: 18s/29s, 9% chance of conversion/1.2sHeals wounded units (1HP/0.4s) (Byzantine ally 1.5HP/0.4s); Class: Monks.',
    ],
  },
  {
    name: 'herbal-medicine',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Herbal Medicine',
      '(350 Gold)',
      'Research time 35s; Units garrisoned in Buildings heal 4x faster. (0.4 HP/s instead of 0.1 HP/s).',
    ],
    dontBelongTo: [
      'Byzantines','Huns','Teutons','Turks','Vikings'
    ],
  },
  {
    name: 'heresy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    isLastOfTech,
    desc: [
      'Research Heresy',
      '(1000 Gold)',
      "Research time 1:00; Units converted by an enemy Monk (or Missionary) die instead of changing to the enemy's color.",
    ],
    dontBelongTo: [
      'Britons','Burmese','Chinese','Goths','Indians','Italians','Japanese','Khamer','Koreans','Slavs','Vietnamese'
    ],
  },
  //#endregion
  //#region Castle
  {
    name: 'aztecs-jaguar-warrior',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Jaguar Warrior',
      '(60 Food, 30 Gold)',
      'Creation time 17s (Conscription 12.8s); Infantry with a bonus against other Infantry units; Elite Jaguar Warrior upgrade 1000F, 500G (Castle).',
      'Hit Pts: 50; Attack: 10 (UT 14) (+10 vs. Infantry, +2 extra vs. Eagles, +2 (+4) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 1/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1 (1.1); Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'aztecs-elite-jaguar-warrior',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Jaguar Warrior',
      '(60 Food, 30 Gold)',
      'Creation time 17s (Conscription 12.8s); Infantry with a bonus against other Infantry units.',
      'Hit Pts: 75; Attack: 12 (UT 16) (+11 vs. Infantry, +2 extra vs. Eagles, +2 (+4) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 2/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1 (1.1); Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'berbers-camel-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Camel Archer',
      '(50 Wood, 60 Gold)',
      'Creation time 21s; Cavalry Archer with a bonus vs. Cav. Archers.',
      'Hit Pts: 55; Attack: 7 (+4 vs. Cavalry Archers, Indian ally: +5 vs. Buildings); Reload time: 2 (TR 1.7); Melee/Pierce Armor: 0/1; Range: 4; Accuracy: 95% (TR 100%); Classes: Camels, Archers, Cavalry Archers, Unique Units; Attack delay: 0.35s; Speed: 1.4 (1.54); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'berbers-elite-camel-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Camel Archer',
      '(50 Wood, 60 Gold)',
      'Creation time 21s; Cavalry Archer with a bonus vs. Cav. Archers.',
      'Hit Pts: 60; Attack: 8 (+6 vs. Cavalry Archers, Indian ally: +5 vs. Buildings); Reload time: 2 (TR 1.7); Melee/Pierce Armor: 0/2; Range: 4; Accuracy: 95% (TR 100%); Classes: Camels, Archers, Cavalry Archers, Unique Units; Attack delay: 0.35s; Speed: 1.4 (1.54); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'britons-longbowman',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Longbowman',
      '(35 Wood, 40 Gold)',
      'Creation time 18s (Conscription 13.5s); Archer with a very long range.',
      'Hit Pts: 35; Attack: 6 (+2 vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 6 (Imp+UT 8); Accuracy: 70%; Classes: Archers, Unique Units; Attack delay: 0.35s; Speed: 0.96; Line of sight: 8 (Imp+UT 10) (Magyar ally +2).',
    ],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'britons-elite-longbowman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Longbowman',
      '(35 Wood, 40 Gold)',
      'Creation time 18s (Conscription 13.5s); Archer with a very long range.',
      'Hit Pts: 40; Attack: 7 (+2 vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 8 (UT 9); Accuracy: 80%; Classes: Archers, Unique Units; Speed: 0.96; Attack delay: 0.35s; Line of sight: 10 (UT 11) (Magyar ally +2).',
    ],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'burmese-arambai',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Arambai',
      '(50 Wood, 60 Gold)',
      'Creation time 21s (Conscription: 15.8s); Powerful, but inaccurate mounted dart thrower. Not affected by range/attack upgrades or Parthian Tactics.',
      'Hit Pts: 60; Attack: 17 (+2 vs. Rams); Reload time: 2; Melee/Pierce Armor: 0/2; Range: 5; Accuracy: 20%; Classes: Cavalry, Archers, Cavalry Archers, Unique Units; Speed: 1.30; Attack delay: 0.7s; Line of sight: 7.',
    ],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'burmese-elite-arambai',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Arambai',
      '(50 Wood, 60 Gold)',
      'Creation time 21s (Conscription: 15.8s); Powerful, but inaccurate mounted dart thrower. Not affected by range/attack upgrades or Parthian Tactics.',
      'Hit Pts: 65; Attack: 19 (+2 vs. Rams); Reload time: 2; Melee/Pierce Armor: 1/3; Range: 5; Accuracy: 30%; Classes: Cavalry, Archers, Cavalry Archers, Unique Units; Speed: 1.30; Attack delay: 0.7s; Line of sight: 7.',
    ],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'byzantines-cataphract',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Cataphract',
      '(70 Food, 75 Gold)',
      'Creation time 20s (Conscription 15s); Powerful against Infantry, partially immune to anti-Cavalry damage. Elite Cataphract upgrade 1600F, 800G (Castle).',
      'Hit Pts: 110; Attack: 9 (+9 vs. Infantry [+15 with Logistica]); Reload time: 1.8; Melee/Pierce Armor: 2/1; (+ 12 Armor vs. anti-Cavalry bonuses); Range: 0; Classes: Cavalry, Unique Units; Speed: 1.35 (1.48); Line of sight: 4.',
    ],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'byzantines-elite-cataphract',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Cataphract',
      '(70 Food, 75 Gold)',
      'Creation time 20s (Conscription 15s); Powerful against Infantry, partially immune to anti-Cavalry damage.',
      'Hit Pts: 150; Attack: 12 (+12 vs. Infantry [+18 with Logistica]); Reload time: 1.7; Melee/Pierce Armor: 2/1; (+ 16 Armor vs. anti-Cavalry bonuses); Range: 0; Classes: Cavalry, Unique Units; Speed: 1.35 (1.43); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'celts-woad-raider',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Woad Raider',
      '(65 Food, 25 Gold)',
      'Creation time 10s (Conscription 7.5s); Infantry with fast movement speed. Elite Woad Raider upgrade 1000F, 800G (Castle).',
      'Hit Pts: 65; Attack: 8 (+2 vs. Eagles, +2 (+4) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1.38; Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'celts-elite-woad-raider',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Woad Raider',
      '(65 Food, 25 Gold)',
      'Creation time 10s (Conscription 7.52s); Infantry with fast movement speed.',
      'Hit Pts: 80; Attack: 13 (+3 vs. Eagles, +3 (+5) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1.38; Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'chinese-chu-ko-nu',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Chu Ko Nu',
      '(40 Wood, 35 Gold)',
      'Creation time 16s; Archer with high attack, good against Rams.',
      'Hit Pts: 45; Attack: 8 (+2 vs. Spear-line, Saracen ally: +2 vs. Buildings) + 2x 3 Pierce (Each arrow 3 dmg vs. Rams); Reload time: 3.6 (Thumb Ring 3); Melee/Pierce Armor: 0/0; Range: 4; Accuracy: 85% (Thumb Ring 100%); Classes: Archers, Unique Units; Attack delay: 0.21s; Speed: 0.96; Line of sight: 6.',
    ],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'chinese-elite-chu-ko-nu',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Chu Ko Nu',
      '(40 Wood, 35 Gold)',
      'Creation time 13s; Archer with high attack, good against Rams.',
      'Hit Pts: 50; Attack: 8 (+2 vs. Spear-line, Saracen ally: +2 vs. Buildings) + 4x 3 Pierce (Each arrow 3 dmg vs. Rams); Reload time: 3.85 (Thumb Ring 3.25); Melee/Pierce Armor: 0/0; Range: 4; Accuracy: 85% (Thumb Ring 100%); Classes: Archers, Unique Units; Attack delay: 0.21s; Speed: 0.96; Line of sight: 6.',
    ],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'ethiopians-shotel-warrior',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Shotel Warrior',
      '(50 Food, 35 Gold)',
      'Creation time 8s (UT 4s); Fast Infantry, powerful but vulnerable. Elite Shotel Warrior upgrade 1200F, 550G (Castle).',
      'Hit Pts: 40; Attack: 16 (+2 vs. Eagles, (Arson: +2 vs. Buildings)); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 0; Classes: Infantry, Unique Units; Speed: 1.2; Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'ethiopians-elite-shotel-warrior',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Shotel Warrior',
      '(50 Food, 35 Gold)',
      'Creation time 8s (UT 4s); Fast Infantry, powerful but vulnerable.',
      'Hit Pts: 50; Attack: 18 (+2 vs. Eagles, +1 (+3) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1.2; Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'franks-throwing-axeman',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Throwing Axeman',
      '(55 Food, 25 Gold)',
      'Creation time 17s; Attacks with Melee damage at a short range.',
      'Hit Pts: 60; Attack: 7 Melee, (+1 vs. Eagles, +1 (+3) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 3; Upgraded by Infantry techs, not affected by Ballistics; Classes: Infantry, Unique Units; Attack delay: 0.7s; Speed: 0.9; Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'franks-elite-throwing-axeman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Throwing Axeman ',
      '(55 Food, 25 Gold)',
      'Creation time 17s (Conscription 12.8s); Attacks with Melee damage at a short range.',
      'Hit Pts: 70; Attack: 8 Melee,  (+2 vs. Eagles, +2 (+4) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 1/0; Range: 4 Upgraded by Infantry techs, not affected by Ballistics; Classes: Infantry, Unique Units; Speed: 0.9; Attack delay: 0.56s; Line of sight: 6 (8).',
    ],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'goths-huskarl',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Huskarl',
      '(80 Food, 40 Gold)',
      'Creation time 13.3s (Conscription and UT 5s), Elite Huskarl upgrade 1200F, 550G (Castle).',
      'Hit Pts: 60; Attack: 10 (+6 vs. Archers, +2 vs. Eagles, +3 (+5) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/6; Range: 0; Classes: Infantry, Unique Units; Speed: 1.05 (1.16); Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'goths-elite-huskarl',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Huskarl',
      '(80 Food, 40 Gold)',
      'Creation time 13.3s (Conscription and UT 5s).',
      'Hit Pts: 70; Attack: 12 (+10 vs. Archers, +3 vs. Eagles, +4 (+6) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/8; Range: 0; Classes: Infantry, Unique Units; Speed: 1.05 (1.16); Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'huns-tarkan',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Tarkan',
      '(60 Food, 60 Gold)',
      'Creation time 14s (Conscription 10.5s); Medium Cavalry with a bonus against Buildings; Elite Tarkan upgrade 1000F, 500G (Castle).',
      'Hit Pts: 100; Attack: 8 (+8 vs. Buildings, +12 extra vs. Stone Defense, +8 extra vs. Walls+Gates, +10 vs. Castles); Reload time: 2.1; Melee/Pierce Armor: 1/3; Range: 0; Classes: Cavalry, Unique Units; Speed: 1.35 (1.49); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'huns-elite-tarkan',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Tarkan',
      '(60 Food, 60 Gold)',
      'Creation time 14s (Conscription 10.5s); Medium Cavalry with a bonus against Buildings.',
      'Hit Pts: 150; Attack: 11 (+10 vs. Buildings, +12 extra vs. Stone Defense, +10 extra vs. Walls+Gates, +10 extra vs. Castles); Reload time: 2.1; Melee/Pierce Armor: 1/4; Range: 0; Classes: Cavalry, Unique Units; Speed: 1.35 (1.49); Line of sight: 7.',
    ],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'incas-kamayuk',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Kamayuk',
      '(60 Food, 30 Gold)',
      'Creation time 10s (Conscription 7.5s); Infantry with attack bonus vs. Cavalry. Can attack units from 1 tile away thanks to its long spear. Elite Kamayuk upgrade 900F, 500G (Castle).',
      'Hit Pts: 60; Attack: 7 (+8 vs. Cavalry, +20 extra vs. Elephants, +6 vs. Camels); Reload time: 2; Melee/Pierce Armor: 0/0 (UT 1/2); Range: 1; Accuracy: 100%; Classes: Infantry, Unique Units; Speed: 1; Line of sight: 4 (6).',
    ],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'incas-elite-kamayuk',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Kamayuk',
      '(60 Food, 30 Gold)',
      'Creation time 10s (Conscription 7.5s); Infantry with attack bonus vs. Cavalry. Can attack units from 1 tile away thanks to its long spear.',
      'Hit Pts: 80; Attack: 8 (+12 vs. Cavalry, +20 extra vs. Elephants, +10 vs. Camels); Reload time: 2; Melee/Pierce Armor: 1/0 (UT 2/2); Range: 1; Classes: Infantry, Unique Units; Speed: 1; Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'indians-elephant-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Elephant Archer',
      '(100 Food, 80 Gold)',
      'Creation time 25s (Conscription 18.8s); High HP, slow Cavalry Archer.',
      'Hit Pts: 280; Attack: 6 (+3 vs. Buildings, +3 extra vs. Stone Defense); Reload time: 2.5 (TR 2.13); Melee/Pierce Armor: 0/3; (-2 Armor (2 extra dmg) against anti-Archer dmg); Range: 4; Classes: Elephants, Archers, Cavalry, Cavalry Archers, Unique Units; Attack delay: 0.28s; Speed: 0.8 (0.88); Line of sight: 7.',
    ],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'indians-elite-elephant-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Elephant Archer',
      '(100 Food, 80 Gold)',
      'Creation time 25s (Conscription 18.8s); High HP, slow Cavalry Archer.',
      'Hit Pts: 330; Attack: 7 (+4 vs. Buildings, +4 extra vs. Stone Defense); Reload time: 2.5 (TR 2.13); Melee/Pierce Armor: 0/3; (-2 Armor (2 extra dmg) against anti-Archer dmg); Range: 4; Accuracy: 100%; Classes: Elephants, Archers, Cavalry, Cavalry Archers, Unique Units; Attack delay: 0.28s; Speed: 0.8 (0.88); Line of sight: 7.',
    ],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'italians-genoese-crossbowman',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Genoese Crossbowman',
      '(45 Wood, 45 Gold)',
      'Creation time 22s (Conscription: 16.5s); Archer with attack bonus vs. Cavalry.',
      'Hit Pts: 45; Attack: 6 (+5 vs. Cavalry, +5 extra vs. Elephants, +4 vs. Camels,Ships, Saracen ally: +2 vs. Buildings); Reload time: 3 (TR 2.55); Melee/Pierce Armor: 1/0; Range: 4; Accuracy: 100%; Classes: Archers, Unique Units; Speed: 0.96; Attack delay: 0.35s; Line of sight: 8 (Magyar ally 10).',
    ],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'italians-elite-genoese-crossbowman',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Genoese Crossbowman',
      '(45 Wood, 45 Gold)',
      'Creation time 19s (Conscription: 14.3s); Archer with attack bonus vs. Cavalry.',
      'Hit Pts: 50; Attack: 6 (+7 vs. Cavalry, +7 extra vs. Elephants, +6 vs. Camels, +5 vs. Ships, Saracen ally: +2 vs. Buildings); Reload time: 2 (TR 1.7); Melee/Pierce Armor: 1/0; Range: 4; Accuracy: 100%; Classes: Archers, Unique Units; Speed: 0.96; Attack delay: 0.35s; Line of sight: 8 (Magyar ally 10).',
    ],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'japanese-samurai',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Samurai',
      '(60 Food, 30 Gold)',
      'Creation time 9s (Conscription 6.8s); Infantry with fast attack and bonus against Unique Units; Elite Samurai upgrade 950F, 875G (Castle).',
      'Hit Pts: 60; Attack: 8 (+10 vs. Unique Units, +2 vs. Eagles, +2 (+4) vs. Buildings); Reload time: 1.43; Melee/Pierce Armor: 1/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1 (1.1); Line of sight: 4 (6).',
    ],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'japanese-elite-samurai',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Samurai',
      '(60 Food, 30 Gold)',
      'Creation time 9s (Conscription 6.8s); Infantry with fast attack and bonus against Unique Units.',
      'Hit Pts: 80; Attack: 12 (+12 vs. Unique Units, +3 vs. Eagles, +3 (+5) vs. Buildings); Reload time: 1.43; Melee/Pierce Armor: 1/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1 (1.1); Line of sight: 4 (6).',
    ],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'khamer-ballista-elephant',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Ballista Elephant',
      '(100 Food, 80 Gold)',
      'Creation time 25s; Heavy cavalry equipped with a Scorpion.',
      'Hit Pts: 250; Attack: 8 (+8 vs. Ships, +5 vs. Buildings, +3 extra vs. Stone Defense); Reload time: 2.5; Melee/Pierce Armor: 0/3 (-2 Armor (2 extra dmg) each against anti-Cavalry, anti-Elephant and anti-Siege dmg); Range: 5 (SE 6); Accuracy: 100%; Classes: Cavalry, Siege, Elephants, Unique Units; Speed: 0.8; Attack delay: 0.28s; Line of sight: 7; Can cut trees.',
    ],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'khamer-elite-ballista-elephant',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Ballista Elephant',
      '(100 Food, 80 Gold)',
      'Creation time 25s; Heavy cavalry equipped with a Scorpion.',
      'Hit Pts: 290; Attack: 9 (+8 vs. Ships, +3 vs. Spearmen, +8 vs. Buildings, +4 extra vs. Stone Defense); Reload time: 2.5; Melee/Pierce Armor: 0/3 (-2 Armor (2 extra dmg) each against anti-Cavalry, anti-Elephant and anti-Siege dmg); Range: 5 (SE 6); Accuracy: 100%; Classes: Cavalry, Siege, Elephants, Unique Units; Speed: 0.8; Attack delay: 0.28s; Line of sight: 7; Can cut trees.',
    ],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'koreans-war-wagon',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create War Wagon',
      '(110 Wood, 60 Gold)',
      'Creation time 21s; Cavalry Archer with high HP and Pierce Armor.',
      'Hit Pts: 150; Attack: 9 (+5 vs. Buildings); Reload time: 2.5 (TR 2.25); Melee/Pierce Armor: 0/3; Range: 4; Accuracy: 100%; Classes: Cavalry, Archers, Cavalry Archers, Unique Units; Attack delay: 0.7s; Speed: 1.2; Line of sight: 7.',
    ],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-elite-war-wagon',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite War Wagon',
      '(110 Wood, 60 Gold)',
      'Creation time 21s; Cavalry Archer with high HP and Pierce Armor.',
      'Hit Pts: 200; Attack: 9 (+5 vs. Buildings); Reload time: 2.5 (TR 2.25); Melee/Pierce Armor: 0/4; Range: 5; Accuracy: 100%; Classes: Cavalry, Archers, Cavalry Archers, Unique Units; Attack delay: 0.7s; Speed: 1.2 (1.32); Line of sight: 8.',
    ],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'magyars-magyar-huszar',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Magyar Huszar',
      '(80 Food, 10 Gold)',
      'Creation time 16s (Conscription 12s); Light Cavalry with a bonus vs. Siege; Elite Magyar Huszar upgrade 800F, 600G (Castle).',
      'Hit Pts: 70; Attack: 9 (+5 vs. Siege, +1 extra vs. Rams); Reload time: 1.8; Melee/Pierce Armor: 0/2; Range: 0; Classes: Cavalry, Unique Units; Speed: 1.5 (1.65); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'magyars-elite-magyar-huszar',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Magyar Huszar',
      '(80 Food, 10 Gold)',
      'Creation time 16s (Conscription 12s); Light Cavalry with a bonus vs. Siege.',
      'Hit Pts: 85; Attack: 10 (+8 vs. Siege, +2 extra vs. Rams); Reload time: 1.8; Melee/Pierce Armor: 0/2; Range: 0; Classes: Cavalry, Unique Units; Speed: 1.5 (1.65); Line of sight: 6.',
    ],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'malay-karambit-warrior',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Karambit Warrior',
      '(25 Food, 10 Gold)',
      'Creation time 6s (Conscription: 4.5s); Cheap and weak infantry unit that only takes half a population slot.',
      'Hit Pts: 30; Attack: 6 (+2 vs. Eagles, (Arson: +2 vs. Buildings)); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1.2; Line of sight: 3.',
    ],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malay-elite-karambit-warrior',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Karambit Warrior',
      '(25 Food, 10 Gold)',
      'Creation time 6s (Conscription: 4.5s); Cheap and weak infantry unit that only takes half a population slot.',
      'Hit Pts: 40; Attack: 7 (+2 vs. Eagles, +1 (+3) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 1/1; Range: 0; Classes: Infantry, Unique Units; Speed: 1.2; Line of sight: 3.',
    ],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malians-gbeto',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Gbeto',
      '(50 Food, 40 Gold)',
      'Creation time 17s (Conscription 12.8s); Fast Infantry with a ranged Melee attack. Powerful but vulnerable. Elite Gbeto upgrade 900F, 600G (Castle).',
      'Hit Pts: 30; Attack: 10 (+1 vs. Eagles); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 5; Accuracy: 100% Upgraded by Infantry techs, not affected by Ballistics; Classes: Infantry, Unique Units; Speed: 1.25; Line of sight: 6 (8).',
    ],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'malians-elite-gbeto',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Gbeto',
      '(50 Food, 40 Gold)',
      'Creation time 17s (Conscription 12.8s); Fast Infantry with a ranged Melee attack. Powerful but vulnerable.',
      'Hit Pts: 45; Attack: 13 (+1 vs. Eagles); Reload time: 2; Melee/Pierce Armor: 0/0; Range: 6; Accuracy: 100% Upgraded by Infantry techs, not affected by Ballistics; Classes: Infantry, Unique Units; Speed: 1.25; Line of sight: 6 (8).',
    ],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'mayans-plumed-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Plumed Archer',
      '(50 Wood, 50 Gold)',
      'Creation time 16s; Fast Foot Archer, ideal for hit and run.',
      'Hit Pts: 50; Attack: 5 (+1 vs. Infantry, +2 extra vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 1.9 (Thumb Ring 1.62); Melee/Pierce Armor: 0/1; Range: 4; Accuracy: 80%; Classes: Archers, Unique Units; Speed: 1.2; Attack delay: 0.35s; Line of sight: 6 (Magyar ally 8).',
    ],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mayans-elite-plumed-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Plumed Archer',
      '(50 Wood, 50 Gold)',
      'Creation time 16s; Fast Foot Archer, ideal for hit and run.',
      'Hit Pts: 65; Attack: 5 (+2 vs. Infantry, +2 extra vs. Spear-line, Saracen ally: +2 vs. Buildings); Reload time: 1.9 (Thumb Ring 1.62); Melee/Pierce Armor: 0/2; Range: 5; Accuracy: 90%; Classes: Archers, Unique Units; Speed: 1.2; Attack delay: 0.35s; Line of sight: 7 (Magyar ally 9).',
    ],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mongols-mangudai',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Mangudai',
      '(55 Wood, 65 Gold)',
      'Creation time 26s; Cavalry Archer with attack bonus against Siege.',
      'Hit Pts: 60; Attack: 6 (+1 vs. Spear-line (+3 with Parthian Tactics), +3 vs. Siege Weapons); Reload time: 1.68 (TR 1.43); Melee/Pierce Armor: 0/0; Range: 4; Accuracy: 95% (TR 100%); Classes: Cavalry, Archers, Cavalry Archers, Unique Units; Attack delay: 0.35s; Speed: 1.45 (1.6); Line of sight 6.',
    ],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'mongols-elite-mangudai',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Mangudai',
      '(55 Wood, 65 Gold)',
      'Creation time 26s; Cavalry Archer with attack bonus against Siege.',
      'Hit Pts: 60; Attack: 8 (+1 vs. Spear-line (+3 with Parthian Tactics), +5 vs. Siege Weapons); Reload time: 1.68 (TR 1.43); Melee/Pierce Armor: 1/0; Range: 4; Accuracy: 95% (TR 100%); Classes: Cavalry, Archers, Cavalry Archers, Unique Units; Attack delay: 0.35s; Speed: 1.45 (1.6); Line of sight: 6.',
    ],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'persians-war-elephant',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create War Elephant',
      '(200 Food, 75 Gold)',
      'Creation time 31s; Powerful Cavalry with bonus vs. Buildings.',
      'Hit Pts: 450; Attack: 15 (+7 vs. Buildings, +7 extra vs. Stone Defense), Blast damage: Attack/2, Blast Radius: 0.5; Reload time: 2; Melee/Pierce Armor: 1/2; Range: 0; Classes: Cavalry, Elephants, Unique Units; Speed: 0.6 (Husbandry + UT 0.86); Line of sight: 4.',
    ],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'persians-elite-war-elephant',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite War Elephant',
      '(200 Food, 75 Gold)',
      'Creation time 31s; Powerful Cavalry with bonus vs. Buildings.',
      'Hit Pts: 600; Attack: 20 (+10 vs. Buildings, +7 extra vs. Stone Defense), Blast damage: Attack/2, Blast Radius: 0.5; Reload time: 2; Melee/Pierce Armor: 1/3; Range: 0; Classes: Cavalry, Elephants, Unique Units; Speed: 0.6 (Husbandry + UT 0.86); Line of sight: 4.',
    ],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'portugueses-organ-gun',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Organ Gun',
      '(80 Wood, 70 Gold)',
      'Creation time 21s; Siege weapon firing bullets, effective against groups of units.',
      'Hit Pts: 60; Attack: 16 + 4x 2 dmg; Reload time: 3.45; Melee/Pierce Armor: 2/4; Range: 7  (min: 1)(Siege Eng. 8); Accuracy: 50%; Classes: Siege Weapons, Gunpowder, Unique Units; Speed: 0.85; Line of sight: 9 (SE 10).',
    ],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-elite-organ-gun',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Organ Gun',
      '(80 Wood, 70 Gold)',
      'Creation time 21s; Siege weapon firing bullets, effective against groups of units.',
      'Hit Pts: 70; Attack: 20 + 4x 2 dmg; Reload time: 3.45; Melee/Pierce Armor: 2/6; Range: 7 (min: 1)(Siege Eng. 8); Classes: Siege Weapons, Gunpowder, Unique Units; Speed: 0.85; Line of sight: 9 (SE 10).',
    ],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'saracens-mameluke',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Mameluke',
      '(55 Food, 85 Gold)',
      'Creation time 23s; Attacks with Melee damage at a short range.',
      'Hit Pts: 65; Attack: 8 Melee (+9 vs. Cavalry, Indian ally: +5 vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/0; (+11 Armor vs. anti-Cavalry bonuses); Range: 3 Upgraded by Cavalry techs, not affected by Ballistics; Classes: Cavalry, Camels, Archers, Unique Units; Attack delay: 0.42s; Speed: 1.4 (1.54); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'saracens-elite-mameluke',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Mameluke',
      '(55 Food, 85 Gold)',
      'Creation time 23s; Attacks with Melee damage at a short range.',
      'Hit Pts: 80; Attack: 10 Melee, (+12 vs. Cavalry, Indian ally: +5 vs. Buildings); Reload time: 2; Melee/Pierce Armor: 1/0; (+11 Armor vs. anti-Cavalry bonuses); Range: 3; Upgraded by Cavalry techs, not affected by Ballistics; Classes: Cavalry, Camels, Archers, Unique Units; Speed: 1.4 (1.54); Attack delay: 0.35; Line of sight: 5.',
    ],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'slavs-boyar',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Boyar',
      '(50 Food, 80 Gold)',
      'Creation time 23s (Conscription 17.3s); Cavalry with heavy Melee Armor; Elite Boyar upgrade 1000F, 600G (Castle).',
      'Hit Pts: 100; Attack: 12; Reload time: 1.9; Melee/Pierce Armor: 4/1; Range: 0; Classes: Cavalry, Unique Units; Speed: 1.35 (1.49); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'slavs-elite-boyar',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Boyar',
      '(50 Food, 80 Gold)',
      'Creation time 20s (Conscription 15s); Cavalry with heavy Melee Armor.',
      'Hit Pts: 130; Attack: 14; Reload time: 1.9; Melee/Pierce Armor: 6/2; Range: 0; Classes: Cavalry, Unique Units; Speed: 1.35 (1.49); Line of sight: 5.',
    ],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'spanish-conquistador',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Conquistador',
      '(60 Food, 70 Gold)',
      'Creation time 24s; Mounted Hand Cannoneer. Powerful attack, but inaccurate at range.',
      'Hit Pts: 55; Attack: 16 (+4 vs. Rams); Reload time: 2.9; Melee/Pierce Armor: 2/2; Range: 6; Accuracy: 65%; Upgraded by Archer Armor, but not Ballistics, TR, attack/range techs; Classes: Cavalry, Archers, Gunpowder, Unique Units (not Cavalry Archer); Attack delay: 0.28s; Speed: 1.3 (1.43); Line of sight: 8.',
    ],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'spanish-elite-conquistador',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Conquistador',
      '(60 Food, 70 Gold)',
      'Creation time 24s; Mounted Hand Cannoneer. Powerful attack, but inaccurate at range.',
      'Hit Pts: 70; Attack: 18 (+4 vs. Rams); Reload time: 2.9; Melee/Pierce Armor: 2/2; Range: 6; Accuracy: 70% Upgraded by Archer Armor, but not Ballistics, TR, attack/range techs; Classes: Cavalry, Archers, Gunpowder, Unique Units (not Cavalry Archer); Speed: 1.3 (1.43); Attack delay: 0.28s; Line of sight: 9.',
    ],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'teutons-teutonic-knight',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Teutonic Knight',
      '(85 Food, 40 Gold)',
      'Creation time 12s (Conscription 9s); Slow Infantry with heavy Melee Armor, weak to ranged. Elite Teutonic Knight upgrade 1200F, 600G (Castle).',
      'Hit Pts: 80; Attack: 12 (+4 vs. Eagles, +4 (+6) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 5/2; Range: 0; Classes: Infantry, Unique Units; Speed: 0.7 (0.77); Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'teutons-elite-teutonic-knight',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Teutonic Knight',
      '(85 Food, 40 Gold)',
      'Creation time 12s (Conscription 9s); Slow Infantry with heavy Melee Armor, weak to ranged.',
      'Hit Pts: 100; Attack: 17 (+4 vs. Eagles, +4 (+6) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 10/2; Range: 0; Classes: Infantry, Unique Units; Speed: 0.7 (0.77); Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'turk-janissary',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Janissary',
      '(60 Food, 55 Gold)',
      'Creation time 16.8s; Stronger hand cannoneer, no bonus against Infantry.',
      'Hit Pts: 35; Attack: 17 (+2 vs. Rams); Reload time: 3.45; Melee/Pierce Armor: 1/0; Range: 8; Accuracy: 50%  not affected by Ballistics, TR, range/attack upgrades; Classes: Archers, Gunpowder, Unique Units; Attack delay: 0.35s; Speed: 0.96; Line of sight: 10.',
    ],
    uniqueUnitOf: 'Turks',
  },
  {
    name: 'turk-elite-janissary',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Janissary',
      '(60 Food, 55 Gold)',
      'Creation time 16.8s; Stronger hand cannoneer, no bonus against Infantry.',
      'Hit Pts: 40; Attack: 22 (+2 vs. Rams); Reload time: 3.45; Melee/Pierce Armor: 2/0; Range: 8; Accuracy: 50% not affected by Ballistics, TR, range/attack upgrades; Classes: Archers, Gunpowder, Unique Units; Attack delay: none; Speed: 0.96; Line of sight: 10.',
    ],
    uniqueUnitOf: 'Turks',
  },
  {
    name: 'vietnamese-rattan-archer',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Rattan Archer',
      '(50 Wood, 45 Gold)',
      'Creation time 16s (Conscription: 12s); Archer with high pierce armor.',
      'Hit Pts: 35; Attack: 6 (+2 vs. Spearmen, Saracen ally: +2 vs. Buildings); Reload time: 2 (TR 1.7); Melee/Pierce Armor: 0/4; Range: 4; Accuracy: 80%; Classes: Archers, Unique Units; Speed: 1.1; Attack delay: 0.35s; Line of sight: 6 (Magyar ally 8).',
    ],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vietnamese-elite-rattan-archer',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Rattan Archer',
      '(50 Wood, 45 Gold)',
      'Creation time 16s (Conscription: 12s); Archer with high pierce armor.',
      'Hit Pts: 40; Attack: 7 (+2 vs. Spearmen, Saracen ally: +2 vs. Buildings); Reload time: 2 (TR 1.7); Melee/Pierce Armor: 0/6; Range: 5; Accuracy: 90%; Classes: Archers, Unique Units; Speed: 1.1; Attack delay: 0.35s; Line of sight: 6 (Magyar ally 8).',
    ],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vikings-berserk',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Berserk',
      '(65 Food, 25 Gold)',
      'Creation time 14s (Conscription 10.5s); Infantry with slow self-regeneration. Elite Berserk upgrade 1300F, 550G (Castle).',
      'Hit Pts: 54; Attack: 9 (+2 vs. Eagles, +2 (+4) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 0/1; Range: 0; Self-healing: 1 HP/3s (UT 1 HP/1.5s); Classes: Infantry, Unique Units; Speed: 1.05 (1.16); Line of sight: 3 (5).',
    ],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-elite-berserk',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Create Elite Berserk',
      '(65 Food, 25 Gold)',
      'Creation time 14s (Conscription 10.5s); Infantry with slow self-regeneration.',
      'Hit Pts: 62; Attack: 14 (+3 vs. Eagles, +3 (+5) vs. Buildings); Reload time: 2; Melee/Pierce Armor: 2/1; Range: 0; Self-healing: 1 HP/3s (UT 1 HP/1.5s); Classes: Infantry, Unique Units; Speed: 1.05 (1.16); Line of sight: 5 (7).',
    ],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'petard',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Petard',
      '(65 Food, 20 Gold)',
      'Creation time 25s (Conscription 18.8s) Detonates to damage Buildings, strong against Walls and Castles, ideal for a surprise attack.',
      'Hit Pts: ; Attack: (+500 (+700 Siege Eng.) vs. Buildings, +900 extra vs. Walls+Gates, +100 extra vs. Castles, +60 vs. Siege Weapons), Blast Radius: 0.5; Melee/Pierce Armor: 0/2; Range: 0; Class: None; Speed: 0.8; Line of sight: 4.',
    ],
  },
  {
    name: 'trebuchet',
    positionColumn: positionColumnChildAge,
    desc: [
      'Build Trebuchet',
      '(200 Wood, 200 Gold)',
      'Creation time 50s (Conscription 37.6s) Powerful anti-Building siege weapon with very long range, but immobile while firing.',
      'Hit Pts: 150; 200 Pierce, (+250 (+300 Siege Eng.) vs. Buildings). Reload time: 10; Melee/Pierce Armor: 1/150 (Packed 2/8); Range: 16 (SE 17)(min: 4); Accuracy: 15%; Class: Siege Weapons; Speed: 0.8; Line of sight: 18 (19); Can cut trees.',
    ],
  },
  {
    name: 'aztecs-atlatl',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Atlatl',
      '(400 Food, 350 Gold)',
      'Research time 40s (Conscription 30s) Skirmishers, Genitours have +1 Attack, +1 range.',
    ],
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'aztecs-garland-wars',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Garland Wars',
      '(450 Food, 750 Gold)',
      'Research time 1:00 (Conscription 45s) Infantry have +4 Attack.',
    ],
    uniqueUnitOf: 'Aztecs',
  },
  {
    name: 'berbers-kasbah',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Kasbah',
      '(250 Food, 250 Gold)',
      'Research time 40s (Conscription 30s) Team Castles work +25% faster.',
    ],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'berbers-maghrabi-camel',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Maghrabi Camels',
      '(700 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Camel troops regenerate 1 HP/4s.',
    ],
    uniqueUnitOf: 'Berbers',
  },
  {
    name: 'britons-yeomen',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Yeomen',
      '(750 Wood, 450 Gold)',
      'Research time 1:00 (Conscription 45s) Foot Archers and Skirmishers have +1 range; Towers have +2 Attack.',
    ],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'britons-warwolf',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Warwolf',
      '(500 Wood, 250 Gold)',
      'Research time 40s (Conscription 30s) Improves your Trebuchets by giving them 100% accuracy and blast damage in a 0.5 tile radius.',
    ],
    uniqueUnitOf: 'Britons',
  },
  {
    name: 'burmese-howdah',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Howdah',
      '(400 Food, 300 Wood)',
      'Research time 40s (Conscription 30s) Battle Elephants get +1/+1 Armor.',
    ],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'burmese-manipur-cavalry',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Manipur Cavalry',
      '(650 Food, 400 Gold)',
      'Research time 40s (Conscription 30s) Cavalry and Arambai deal +6 bonus attack vs. Buildings. Half of that can be blocked by building armor (e.g. of a castle or masonry research).',
    ],
    uniqueUnitOf: 'Burmese',
  },
  {
    name: 'byzantines-greek-fire',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Greek Fire',
      '(250 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Fire Ships have +1 range.',
    ],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'byzantines-logistica',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Logistica',
      '(1000 Food, 600 Gold)',
      'Research time 50s (Conscription 38s) Cataphracts cause blast damage (5 dmg per attack in 0.5 blast radius) and get +6 extra Attack vs. Infantry.',
    ],
    uniqueUnitOf: 'Byzantines',
  },
  {
    name: 'celts-stronghold',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Stronghold',
      '(250 Food, 200 Gold)',
      'Research time 30s (Conscription 23s) Makes your Castles and Towers stronger by making them fire +25% faster.',
    ],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'celts-furor-celtica',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Furor Celtica',
      '(750 Food, 450 Gold)',
      'Research time 50s (Conscription 38s) Siege Workshop units have +40% hit points.',
    ],
    uniqueUnitOf: 'Celts',
  },
  {
    name: 'chinese-great-wall',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Great Wall',
      '(400 Wood, 200 Stone)',
      'Research time 40s (Conscription 30s) Makes your Walls and Towers stronger by giving them +30% hit points.',
    ],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'chinese-rocketry',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Rocketry',
      '(750 Wood, 750 Gold)',
      'Research time 1:00 (Conscription 45s) Chu Ko Nus have +2 Pierce attack; Scorpions have +4 Pierce attack.',
    ],
    uniqueUnitOf: 'Chinese',
  },
  {
    name: 'ethiopians-royal-heirs',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Royal Heirs',
      '(300 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Shotel Warriors are created twice as fast (-4s creation time).',
    ],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'ethiopians-torsion-engine',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Torsion Engines',
      '(100 Food, 600 GOld)',
      'Research time 40s (Conscription 30s) Rams, Onagers +0.5 blast radius.',
    ],
    uniqueUnitOf: 'Ethiopians',
  },
  {
    name: 'franks-chivalry',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Chivalry',
      '(400 Wood, 400 Gold)',
      'Research time 40s (Conscription 30s) Increases the production speed of stables by +40%.',
    ],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'franks-bearded-axe',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Bearded Axe',
      '(400 Food, 400 Gold)',
      'Research time 1:00 (Conscription 45s) Throwing Axemen have +1 range.',
    ],
    uniqueUnitOf: 'Franks',
  },
  {
    name: 'goths-anarchy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Anarchy',
      '(450 Food, 250 Gold)',
      'Research time 40s (Conscription 30s) Allows Huskarls to be created at the Barracks (profiting from faster creation time there).',
    ],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'goths-perfusion',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Perfusion',
      '(400 Wood, 600 Gold)',
      'Research time 40s (Conscription 30s) Barracks units are created 2x faster.',
    ],
    uniqueUnitOf: 'Goths',
  },
  {
    name: 'huns-marauders',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Marauders',
      '(300 Wood, 200 Gold)',
      'Research time 40s (Conscription 30s) Enables you to create Tarkans at Stables.',
    ],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'huns-atheism',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Atheism',
      '(500 Food, 500 Gold)',
      'Research time 1:00 (Conscription 45s) Relic and Wonder victories take +100 years to complete; researching the Spies/Treason technology costs 50% less.',
    ],
    uniqueUnitOf: 'Huns',
  },
  {
    name: 'incas-andean-sling',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Andean Sling',
      '(200 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Upgrades your Skirmishers, Genitours and Slingers by removing their minimum range.',
    ],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'incas-couriers',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Couriers',
      '(400 Food, 200 Gold)',
      'Research time 40s (Conscription 30s) Kamayuks, Slingers, Eagles have +1/+2 Armor.',
    ],
    uniqueUnitOf: 'Incas',
  },
  {
    name: 'indians-sultans',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Sultans',
      '(400 Food, 400 Wood)',
      'Research time 40s (Conscription 30s) All gold income +10% faster (Trade, mines, relics).',
    ],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'indians-shatagni',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Shatagni',
      '(500 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Hand Cannoneers have +1 range.',
    ],
    uniqueUnitOf: 'Indians',
  },
  {
    name: 'italians-pavise',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Pavise',
      '(300 Food, 150 Gold)',
      'Research time 40s (Conscription 30s) Foot Archers have +1/+1 Armor.',
    ],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'italians-silk-road',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Silk Road',
      '(500 Food, 250 Gold)',
      'Research time 40s (Conscription 30s) Trade units cost -50%.',
    ],
    uniqueUnitOf: 'Italians',
  },
  {
    name: 'japanese-yasama',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Yasama',
      '(300 Food, 300 Wood)',
      'Research time 40s (Conscription 30s) Makes your Towers stronger by making them shoot 2 extra arrows.',
    ],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'japanese-kataparuto',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Kataparuto',
      '(750 Wood, 400 Gold)',
      'Research time 1:00 (Conscription 45s) Trebuchets fire 33% faster and pack/unpack 4x faster (2.75s vs. 11s).',
    ],
    uniqueUnitOf: 'Japanese',
  },
  {
    name: 'khamer-tusk-swords',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Tusk Swords',
      '(200 Wood, 300 Gold)',
      'Research time 40s (Conscription 30s) Battle Elephants get +3 Attack.',
    ],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'khamer-double-crossbow',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Double Crossbow',
      '(700 Food, 400 Gold)',
      'Research time 40s (Conscription 30s) Ballista Elephants and Scorpions shoot two projectiles.Scorpions: Second bolt has 50% of the strength of the first bolt.Ballista Elephants: Second bolt 6 Pierce Attack, +3 vs. Elephants, +1 vs. Buildings.',
    ],
    uniqueUnitOf: 'Khamer',
  },
  {
    name: 'koreans-panokseon',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Panokseon',
      '(300 Food, 300 Wood)',
      'Research time 40s (Conscription 30s) Turtle Ships move 15% faster.',
    ],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'koreans-shinkichon',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Shinkichon',
      '(800 Wood, 500 Gold)',
      'Research time 1:00 (Conscription 45s) Mangonels, Onagers, and Siege Onagers have +1 range.',
    ],
    uniqueUnitOf: 'Koreans',
  },
  {
    name: 'magyars-mercenaries',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Mercenaries',
      '(200 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Magyar Huszars cost no gold.',
    ],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'magyars-recurve-bow',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Recurve Bow',
      '(600 Wood, 400 Gold)',
      'Research time 40s (Conscription 30s) Cavalry Archers have +1 range, +1 Attack.',
    ],
    uniqueUnitOf: 'Magyars',
  },
  {
    name: 'malay-thalassocracy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Thalassocracy',
      '(300 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Upgrades your Docks to Harbors, which fire arrows (1 main arrow: 6 Pierce, +13 vs. Ships, affected by Blacksmith upgrades, Chemistry and Heated Shot; 3 extra arrows: 1 damage each).',
    ],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malay-forced-levy',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Forced Levy',
      '(1000 Food, 600 Gold)',
      'Research time 40s (Conscription 30s) Militia-line units no longer cost Gold.',
    ],
    uniqueUnitOf: 'Malay',
  },
  {
    name: 'malians-tigui',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Tigui',
      '(200 Food, 300 Wood)',
      'Research time 40s (Conscription 30s) Town Centers fire 5 extra arrows, even empty.',
    ],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'malians-farimba',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Farimba',
      '(650 Food, 400 Gold)',
      'Research time 40s (Conscription 30s)Cavalry +5 Attack.',
    ],
    uniqueUnitOf: 'Malians',
  },
  {
    name: 'mayans-obsidian-arrows',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Obsidian Arrows',
      '(300 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Improves your Archers, Crossbowmen and Arbalests by giving them +6 Attack vs. Buildings, +6 vs. Stone Defense (Towers, Walls).',
    ],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mayans-el-dorado',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research El Dorado',
      '(750 Food, 450 Gold)',
      'Research time 50s (Conscription 38s) Eagle Warriors have +40 hit points.',
    ],
    uniqueUnitOf: 'Mayans',
  },
  {
    name: 'mongols-nomads',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Nomads',
      '(300 Wood, 150 Gold)',
      "Research time 40s (Conscription 30s) Houses don't lose their population room when they are destroyed.",
    ],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'mongols-drill',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Drill',
      '(500 Wood, 450 Gold)',
      'Research time 1:00 (Conscription 38s) Siege Workshop units move 50% faster.',
    ],
    uniqueUnitOf: 'Mongols',
  },
  {
    name: 'persians-boiling-oil',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Boiling Oil',
      '(200 Wood, 100 Stone)',
      'Research time 40s (Conscription 30s) Castles +9 Attack vs. Rams (Only affects the first arrow).',
    ],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'persians-mahouts',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Mahouts',
      '(300 Food, 300 Gold)',
      'Research time 50s (Conscription 38s) War Elephants move 30% faster.',
    ],
    uniqueUnitOf: 'Persians',
  },
  {
    name: 'portugueses-carrack',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Carrack',
      '(200 Wood, 300 Gold)',
      'Research time 40s (Conscription 30s) Ships get +1/+1 Armor.',
    ],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'portugueses-arquebus',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Arquebus',
      '(700 Food, 400 Gold)',
      'Research time 40s (Conscription 30s) Ballistics for Gunpowder units.',
    ],
    uniqueUnitOf: 'Portugueses',
  },
  {
    name: 'saracens-madrasah',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Madrasah',
      '(200 Food, 100 Gold)',
      'Research time 30s (Conscription 23s) Killed Monks return 33% of their cost.',
    ],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'saracens-zealotry',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Zealotry',
      '(750 Food, 800 Gold)',
      'Research time 50s (Conscription 38s) Camels and Mamelukes have +30 hit points.',
    ],
    uniqueUnitOf: 'Saracens',
  },
  {
    name: 'slavs-orthodoxy',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Orthodoxy',
      '(200 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Monks have +3/+3 Armor.',
    ],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'slavs-druzhina',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Druzhina',
      '(1200 Food, 500 Gold)',
      'Research time 40s (Conscription 30s) Infantry deal 5 damage to adjacent units in 0.5 blast radius.',
    ],
    uniqueUnitOf: 'Slavs',
  },
  {
    name: 'spanish-inquisition',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Inquisition',
      '(100 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Improved Conversion: min/max conversion times -1s for units, -7s for Buildings, +2% chance of conversion/s for Buildings.',
    ],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'spanish-supremacy',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Supremacy',
      '(400 Food, 250 Gold)',
      'Research time 1:00 (Conscription 45s) Villagers have +40 HP, +6 Attack and +2/2 Armor.',
    ],
    uniqueUnitOf: 'Spanish',
  },
  {
    name: 'teutons-ironclad',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Ironclad',
      '(400 Wood, 350 Gold)',
      'Research time 1:00 (Conscription 40s) Siege Weapons +4 Melee Armor.',
    ],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'teutons-crenellations',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Crenellations',
      '(600 Food, 400 Stone)',
      'Research time 1:00 (Conscription 45s) Castles have +3 range; garrisoned Infantry fire arrows like Villagers.',
    ],
    uniqueUnitOf: 'Teutons',
  },
  {
    name: 'turk-sipahi',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Sipahi',
      '(350 Food, 150 Gold)',
      'Research time 40s (Conscription 30s) Cavalry Archers have +20 hit points.',
    ],
    uniqueUnitOf: 'Turks',
  },
  {
    name: 'turk-artillery',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Artillery',
      '(450 Stone, 500 Gold)',
      'Research time 40s (Conscription 30s) Bombard Towers, Bombard Cannons, and Cannon Galleons have +2 range.',
    ],
    uniqueUnitOf: 'Turks',
  },
  {
    name: 'vietnamese-chatras',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Chatras',
      '(250 Food, 250 Gold)',
      'Research time 40s (Conscription 30s) Battle Elephants get +50 HP.',
    ],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vietnamese-paper-money',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Paper Money',
      '(800 Food, 200 Gold)',
      'Research time 40s (Conscription 30s) You and all your allies receive +500 Gold.',
    ],
    uniqueUnitOf: 'Vietnamese',
  },
  {
    name: 'vikings-chieftains',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Chieftains',
      '(400 Food, 300 Gold)',
      'Research time 40s (Conscription 30s) Infantry get +5 Attack vs. Cavalry, +4 Attack vs. Camels.',
    ],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'vikings-berserkergang',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Berserkergang',
      '(850 Food, 400 Gold)',
      'Research time 40s (Conscription 30s) Berserks regenerate 2x faster (1 HP/1.5s instead of 1 HP/3s).',
    ],
    uniqueUnitOf: 'Vikings',
  },
  {
    name: 'castle',
    positionColumn: positionColumn5,
    svgTechParentSize: '427',
    svgParentPosition: '-181.5px',
    desc: [
      'Build Castle',
      '(650 Stone)',
      'Construction time 3:20; Used to create your unique unit, build Trebuchets, and improve Villagers and Buildings. Cannot be converted by enemy Monks.',
      'Hit Pts: 4800; Attack: 11 (+11 vs. Ships, +1 vs. Camels, +11 vs. Stone Defense); Armor: 8; Pierce Armor: 11 (+8 against Building bonus dmg from Siege Weapons); Range: 8 Garrison: 20; Line of sight: 10 (Town Watch/Patrol +4 each).'
    ],
  },
  {
    name: 'hoardings',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Hoardings',
      '(400 Food, 400 Wood)',
      'Research time 1:15 (Conscription 56s)Strengthens Castles by providing +1000 (or +21%) HP.Stacks with Masonry/Architecture/Byzantine bonus.',
    ],
    dontBelongTo: [
      'Aztecs','Burmese','Chinese','Ethiopians','Goths','Huns','Japanese','Koreans','Malay','Portuguese'
    ],
  },
  {
    name: 'sappers',
    positionColumn: positionColumn7,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Sappers',
      '(400 Food, 200 Gold)',
      'Research time 10s; Villagers have +15 Attack vs. Buildings (+15 extra vs. Stone Defense).',
    ],
    dontBelongTo: [
      'Berbers','Burmese','Byzantines','Franks','Indians','Italians','Japanese','Koreans','Saracens'
    ],
  },
  {
    name: 'conscription',
    positionColumn: positionColumn7,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Conscription',
      '(150 Food, 150 Gold)',
      'Research time 1:00; Units + Technologies at Barracks, Archery Range, Stable, and Castle are created/researched 33% faster.',
    ],
  },
  {
    name: 'spies-treason',
    positionColumn: positionColumn7,
    svgSize: svgSizeChildAge2BelowParent,
    isLast: last135,
    isLastOfTech,
    desc: [
      'Research Spies/Treason',
      '(Cost: 200 per enemy villager for Spies/400 per use for Treason)',
      'Spies (Random Map games) instant research; reveals all enemy units and buildings by showing you their line of sight. The total cost is 200 gold per each enemy villager. Treason (Regicide games) reveals the position of all enemy Kings to your team for a few seconds. The Kings appear on the mini-map as a flashing X. Each time you research Treason, 400 gold is immediately deducted from your stockpile.',
    ],
  },
  //#endregion
  //#region House & Town Center
  {
    name: 'house',
    positionColumn: positionColumn1,
    isLast: last900,
    isLastOfTech,
    desc: [
      'Build House',
      '(25 Wood)',
      'Construction time 25s; Each House supports 5 units. Your current/supportable population is shown at the top of the game screen. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 550; Armor: 0; Pierce Armor: 7; Line of sight: 2 (Town Watch/Patrol +4 each).',
    ],
    dontBelongTo: [
      'Huns'
    ],
  },
  {
    name: 'villager',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Create Villager',
      '(50 Food)',
      'Creation time 25s; Repair rate: First villager 12.5 HP/s, every additional one 6.25 HP/s; repair cost: half Building cost (except TC: 2x wood cost, 1 stone). Shepherd: 0.33 F/s, Hunter: 0.41 F/s, Forager 0.31 F/s, Farmer ~0.32 F/s, Fisherman 0.43 F/s.',
      'Hit Pts: 25; Attack: 3 (+3 vs. Buildings (+18), +6 extra vs. Stone Defense (+21)); Reload time: 2; Melee/Pierce Armor: 0/0 (1/2); Speed: 0.8; Line of sight: 4.',
    ],
  },
  {
    name: 'town-watch',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Town Watch',
      '(75 Food)',
      'Research time 25s; Increases the line of sight of all Buildings by +4 so they see enemies from a longer distance.',
    ],
  },
  {
    name: 'town-patrol',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    isLast: last385,
    desc: [
      'Research Town Patrol',
      '(300 Food, 100 Gold)',
      'Research time 40s; Increases the line of sight of all Buildings by +4 so they see enemies from a longer distance.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Byzantines','Celts','Chinese','Ethiopians','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Khamer','Koreans','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Saracens','Slavs','Spanish','Teutons','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'town-center',
    positionColumn: positionColumn1,
    svgTechParentSize: '144.5',
    svgParentPosition: '-40.25px',
    desc: [
      'Build Town Center',
      '(175 Wood, 100 Stone)',
      'Construction time 2:30; Used to create Villagers, deposit all resources and advance to the next Age. Units can garrison inside for protection. Cannot be converted by enemy Monks.',
      'Hit Pts: 2400; Attack: 5 (+5 vs. Ships, +1 vs. Camels, +5 vs. Stone Defense); Armor: 3; Pierce Armor: 5; Range: 6; Garrison: 15; LoS: 8 (Town Watch/Patrol +4 each). Repair costs: 2x wood, 1 stone.',
    ],
  },
  {
    name: 'feudal-age',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Advance to Feudal Age',
      '(500 Food; two Dark Age Buildings)',
      'Research time 2:10; Improves your civilization. Gives you access to different Buildings, more powerful military units, and stronger technologies. Before you can advance, you must have any two Dark Age Buildings: Lumber Camp, Mining Camp, Mill, Dock, or Barracks.',
    ],
  },
  {
    name: 'castle-age',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Advance to Castle Age',
      '(800 Food, 200 Gold; two Feudal Age Buildings)',
      'Research time 2:40; Improves your civilization. Gives you access to different Buildings, more powerful military units, and stronger technologies. Before you can advance, you must have any two Feudal Age Buildings: Archery Range, Stable, Blacksmith, or Market.',
    ],
  },
  {
    name: 'imperial-age',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last385,
    desc: [
      'Advance to Imperial Age',
      '(1000 Food, 800 Gold; two Castle Age Buildings)',
      'Research time 3:10; Improves your civilization. Gives you access to different Buildings, more powerful military units, and stronger technologies. Before you can advance, you must have a Castle or any two Castle Age Buildings: University, Siege Workshop, or Monastery.',
    ],
  },
  {
    name: 'loom',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Loom',
      '(50 Gold)',
      'Research time 25s; Makes your Villagers harder to kill by providing +15 hit points and +1 Melee Armor/+2 Pierce Armor.',
    ],
  },
  {
    name: 'wheelbarrow',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Wheelbarrow',
      '(175 Food, 50 Wood)',
      'Research time 1:15; Villagers work more efficiently by moving 10% faster and carrying 25% more resources.',
    ],
  },
  {
    name: 'hand-cart',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Hand Cart',
      '(300 Food, 200 Wood)',
      'Research time 55s; Villagers work more efficiently by moving 10% faster and carrying 50% more resources.',
    ],
  },
  {
    name: 'town-center-building',
    positionColumn: positionColumn5,
    isLastOfTech,
    desc: [
      'Build Town Center',
      '(175 Wood, 100 Stone)',
      'Construction time 2:30; Used to create Villagers, deposit all resources and advance to the next Age. Units can garrison inside for protection. Cannot be converted by enemy Monks.',
      'Hit Pts: 2400; Attack: 5 (+5 vs. Ships, +1 vs. Camels, +5 vs. Stone Defense); Armor: 3; Pierce Armor: 5; Range: 6; Garrison: 15; LoS: 8 (Town Watch/Patrol +4 each). Repair costs: 2x wood, 1 stone.',
    ],
  },
  //#endregion
  //#region Siege Workshop
  {
    name: 'mangonel',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Build Mangonel',
      '(160 Wood, 135 Gold)',
      'Creation time 46s (Celt ally 38.3s); Powerful against massed units, especially Archers.',
      'Hit Pts: 50; Attack: 40 Melee, Blast Radius: 1 (+12 vs. Siege Weapons, +35 vs. Buildings (+42 Siege Eng.)); Reload time: 6; Melee/Pierce Armor: 0/6; Range: 7 (SE 8) (min: 3)(Korean ally 1); Class: Siege Weapons; Speed: 0.6; Line of sight: 9 (10).',
    ],
  },
  {
    name: 'onager',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Build Onager',
      '(160 Wood, 135 Gold)',
      'Creation time 46s (Celt ally 38.3s); Powerful against massed units, especially Archers.',
      'Hit Pts: 60; Attack: 50 Melee, Blast Radius: 1.25 (+12 vs. Siege Weapons, +45 vs. Buildings (+54 Siege Eng.); Reload time: 6; Melee/Pierce Armor: 0/7; Range: 8 (SE 9) (min: 3)(Korean ally 1); Class: Siege Weapons; Speed: 0.6; Line of sight: 10 (11); Can cut trees.',
    ],
    dontBelongTo: [
      'Huns','Turks'
    ],
  },
  {
    name: 'siege-onager',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Build Siege Onager',
      '(160 Wood, 135 Gold)',
      'Creation time 46s (Celt ally 38.3s); Powerful against massed units, especially Archers.',
      'Hit Pts: 70; Attack: 75 Melee, Blast Radius: 1.5  (+12 vs. Siege Weapons, +60 vs. Buildings (Siege Eng. +72). Reload time: 6; Melee/Pierce Armor: 0/8; Range: 8 (SE 9) (min: 3)(Korean ally 1); Class: Siege Weapons; Speed: 0.6; Line of sight: 10 (11); Can cut trees.',
    ],
    dontBelongTo: [
      'Berbers','Britons','Burmese','Byzantines','Chinese','Franks','Goths','Huns','Incas','Indians','Italians','Japanese','Khamer','Magyars','Malay','Mayans','Persians','Portuguese','Spanish','Turks','Vietnamese','Vikings'
    ],
  },
  {
    name: 'siege-workshop',
    positionColumn: positionColumn5,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '213',
    svgParentPosition: '-74.5px',
    isAlignCenter,
    desc: [
      'Build Siege Workshop',
      '(200 Wood)',
      'Construction time 40s; Used to build Siege Weapons. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 1800; Armor: 2; Pierce Armor: 9; <garrison>; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'battering-ram',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Build Battering Ram',
      '(160 Wood, 75 Gold)',
      'Creation time 36s; Powerful vs. Buildings, strong vs. Pierce attacks, weak to Melee.',
      'Hit Pts: 175; Attack: 2(+125 vs. Buildings (150) (+10/garrisoned inf. unit), +40 vs. Siege Weapons), Blast Radius: 0; Reload time: 5; Melee/Pierce Armor: -3/180; Range: 0; Garrison: 4; Classes: Siege Weapons, Rams; Speed: 0.5 +0.05/garrisoned inf. unit; Line of sight: 3.',
    ],
  },
  {
    name: 'capped-ram',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Build Capped Ram',
      '(160 Wood, 75 Gold)',
      'Creation time 36s; Powerful vs. Buildings, strong vs. Pierce attacks, weak to Melee.',
      'Hit Pts: 200; Attack: 3 (+150 vs. Buildings (180) (+10/garrisoned inf. unit), +50 vs. Siege Weapons), Blast Radius: 1.5; Reload time: 5; Melee/Pierce Armor: -3/190; Range: 0; Garrison: 5; Classes: Siege Weapons, Rams; Speed: 0.5 +0.05/garrisoned inf. unit; Line of sight: 3.',
    ],
  },
  {
    name: 'siege-ram',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Build Siege Ram',
      '(160 Wood, 75 Gold)',
      'Creation time 36s; Powerful vs. Buildings, strong vs. Pierce attacks, weak to Melee.',
      'Hit Pts: 270; Attack: 4 (+200 vs. Buildings (240) (+10/garrisoned inf. unit), +65 vs. Siege Weapons), Blast Radius: 2; Reload time: 5; Melee/Pierce Armor: -3/195; Range: 0; Garrison: 6; Classes: Siege Weapons, Rams; Speed: 0.6 +0.05/garrisoned inf. unit; Line of sight: 3.',
    ],
    dontBelongTo: [
      'Berbers','Britons','Burmese','Franks','Goths','Indians','Italians','Japanese','Koreans','Magyars','Malay','Malians','Portuguese','Teutons','Vietnamese'
    ],
  },
  {
    name: 'scorpion',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Build Scorpion',
      '(75 Wood, 75 Gold)',
      'Creation time 30s (Celt ally 25s); Damages all units in the path of its projectile.',
      'Hit Pts: 40; Attack: 12 Pierce (+6 vs. Elephants, +2 vs. Buildings), Pass-through dmg: 1/2 atk; Reload time: 3.6; Melee/Pierce Armor: 0/7; Range: 7 (Siege Eng. 8) (min: 2); Class: Siege Weapons; Speed: 0.65; Line of sight: 9 (SE 10).',
    ],
  },
  {
    name: 'heavy-scorpion',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Build Heavy Scorpion',
      '(75 Wood, 75 Gold)',
      'Creation time 30s (Celt ally 25s); Damages all units in the path of its projectile.',
      'Hit Pts: 50; Attack: 16 Pierce (+2 vs. Rams, +8 vs. Elephants, +4 vs. Buildings), Pass-through dmg: 1/2 atk; Melee/Pierce Armor: 0/7; Range: 7 (Siege Eng. 8) (min: 2); Class: Siege Weapons; Speed: 0.65; Reload time: 3.6; Line of sight: 9 (SE 10).',
    ],
    dontBelongTo: [
      'Aztecs','Byzantines','Huns','Indians','Italians','Koreans','Malians','Portuguese','Saracens','Spanish','Vietnamese'
    ],
  },
  {
    name: 'siege-tower',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Build Siege Tower',
      '(200 Wood, 160 Gold)',
      "Creation time 36s (Celt ally 30s); Siege weapon used to scale enemy walls. Scaling only works over a single layer of wall. Resistant to Archer attack, vulnerable to Melee. Can't garrison Siege or Cavalry.",
      'Hit Pts: 220; Attack: 0; Melee/Pierce Armor: -2/100; Garrison: 10; Class: Siege Weapons; Speed: 0.8 +0.05/garrisoned inf. unit; Line of sight: 9.',
    ],
  },
  {
    name: 'bombard-cannon',
    positionColumn: positionColumnChildAge,
    isLastOfTech,
    desc: [
      'Build Bombard Cannon',
      '(225 Wood, 225 Gold)',
      'Creation time 56s (Celt ally 46.7s, Turk ally 44.8s); Powerful anti-Building siege weapon with long range.',
      'Hit Pts: 80; Attack: 40 Melee (+20 vs. Siege Weapons, +200 vs. Buildings (Siege Eng. 240), +40 extra vs. Stone Defense, +40 vs. Ships), Blast Radius: 0.5; Reload time: 6.5; Melee/Pierce Armor: 2/5; Range: 12 (13) (min: 5); Classes: Siege Weapons, Gunpowder; Speed: 0.7; Reload time: 6.5; Line of sight: 14 (SE 15).',
    ],
    dontBelongTo: [
      'Aztecs','Britons','Celts','Chinese','Huns','Incas','Japanese','Magyars','Mayans','Mongols','Slavs','Vikings'
    ],
  },
  //#endregion
  //#region Blacksmith
  {
    name: 'padded-archer-armor',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Padded Archer Armor',
      '(100 Food)',
      'Research time 40s; Archers, Cavalry Archers and Hand Cannoneers have +1 Melee Armor/+1 Pierce Armor.',
    ],
  },
  {
    name: 'leather-archer-armor',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Leather Archer Armor',
      '(150 Food, 150 Gold)',
      'Research time 55s; Archers, Cavalry Archers and Hand Cannoneers have +1 Melee Armor/+1 Pierce Armor.',
    ],
    dontBelongTo: [
      'Burmese'
    ],
  },
  {
    name: 'ring-archer-armor',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Ring Archer Armor',
      '(250 Food, 250 Gold)',
      'Research time 1:10; Archers, Cavalry Archers and Hand Cannoneers have +1 Melee Armor/+2 Pierce Armor.',
    ],
    dontBelongTo: [
      'Aztecs','Burmese','Celts','Franks','Huns','Mongols'
    ],
  },
  {
    name: 'fletching',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Fletching',
      '(100 Food, 50 Gold)',
      'Research time 30s; All arrow/bolt-firing units/buildings and Bombard Towers have +1 Attack, +1 range and +1 LoS (no range/LoS increase for Town Centers). Does not affect Siege.',
    ],
  },
  {
    name: 'bodkin-arrow',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Bodkin Arrow',
      '(200 Food, 100 Gold)',
      'Research time 35s; All arrow/bolt-firing units/buildings and Bombard Towers have +1 Attack, +1 range and +1 LoS (no range/LoS increase for Town Centers). Does not affect Siege.',
    ],
  },
  {
    name: 'bracer',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Bracer',
      '(300 Food, 200 Gold)',
      'Research time 40s; All arrow/bolt-firing units/buildings and Bombard Towers have +1 Attack, +1 range and +1 LoS (no range/LoS increase for Town Centers). Does not affect Siege.',
    ],
    dontBelongTo: [
      'Celts','Franks','Malians','Persians','Slavs','Teutons'
    ],
  },
  {
    name: 'blacksmith',
    positionColumn: positionColumn3,
    svgTechParentSize: '487',
    svgParentPosition: '-312px',
    desc: [
      'Build Blacksmith',
      '(150 Wood)',
      'Construction time 40s; Used to improve Infantry, Archers, Cavalry, Towers, Town Centers, Castles, and Ships. Required for Siege Workshop. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 1800; Armor: 0; Pierce Armor: 7; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'forging',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Forging',
      '(150 Food)',
      'Research time 50s; Infantry and Cavalry have +1 Attack.',
    ],
  },
  {
    name: 'iron-casting',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Iron Casting',
      '(220 Food, 120 Gold)',
      'Research time 1:15; Infantry and Cavalry have +1 Attack.',
    ],
  },
  {
    name: 'blast-furnace',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Blast Furnace',
      '(275 Food, 225 Gold)',
      'Research time 1:40; Infantry and Cavalry have +2 Attack.',
    ],
    dontBelongTo: [
      'Byzantines','Koreans','Malians','Vietnamese'
    ],
  },
  {
    name: 'scale-barding-armor',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Scale Barding Armor',
      '(150 Food)',
      'Research time 45s; Cavalry have +1 Melee Armor/+1 Pierce Armor.',
    ],
    dontBelongTo: [
      'Berbers','Incas','Mayans'
    ],
  },
  {
    name: 'chain-barding-armor',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Chain Barding Armor',
      '(250 Food, 150 Gold)',
      'Research time 1:00; Cavalry have +1 Melee Armor/+1 Pierce Armor.',
    ],
    dontBelongTo: [
      'Berbers','Incas','Mayans'
    ],
  },
  {
    name: 'plate-barding-armor',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Plate Barding Armor',
      '(350 Food, 200 Gold)',
      'Research time 1:15; Cavalry have +1 Melee Armor/+2 Pierce Armor.',
    ],
    dontBelongTo: [
      'Aztecs','Celts','Ethiopians','Goths','Incas','Japanese','Koreans','Malay','Mayans','Mongols','Vikings'
    ],
  },
  {
    name: 'scale-mail-armor',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Scale Mail Armor',
      '(100 Food)',
      'Research time 40s; Infantry have +1 Melee Armor/+1 Pierce Armor.',
    ],
  },
  {
    name: 'chain-mail-armor',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Chain Mail Armor',
      '(200 Food, 100 Gold)',
      'Research time 55s; Infantry have +1 Melee Armor/+1 Pierce Armor.',
    ],
  },
  {
    name: 'plate-mail-armor',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLastOfTech,
    desc: [
      'Research Plate Mail Armor',
      '(300 Food, 150 Gold)',
      'Research time 1:10; Infantry have +1 Melee Armor/+2 Pierce Armor.',
    ],
    dontBelongTo: [
      'Goths','Huns','Indians','Khamer','Magyars'
    ],
  },
  //#endregion
  //#region University
  {
    name: 'masonry',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Masonry',
      '(150 Food, 175 Wood)',
      "Research time 50s (Malian ally 28s); Strengthens all Buildings (except Walls + Gates) by providing +10% hit points, +1 Melee Armor/+1 Pierce Armor, and +3 Building Armor (doesn't protect against Infantry anti-Building dmg).",
    ],
    dontBelongTo: [
      'Aztecs','Byzantines','Vietnamese'
    ],
  },
  {
    name: 'architecture',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Architecture',
      '(300 Food, 200 Wood)',
      "Research time 1:10 (Malian ally 39s); Strengthens all Buildings (except Walls + Gates) by providing +10% hit points, +1 Melee Armor/+1 Pierce Armor, and +3 Building Armor (doesn't protect against Infantry anti-Building dmg).",
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Byzantines','Celts','Huns','Incas','Indians','Magyars','Malay','Mongols','Saracens','Slavs','Teutons','Vietnamese'
    ],
  },
  {
    name: 'fortified-wall',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Upgrade to Fortified Wall',
      '(200 Food, 100 Wood)',
      "Research time 50s (Malian ally 28s); Upgrades your Stone Walls and lets you build Fortified Walls, which are stronger (+1200 HP, +4/+2 Armor, +8 against anti-Building dmg (doesn't protect against Infantry anti-Building dmg)). Also increases the hit points of your Gates (+1250 HP), which makes them harder to destroy.",
    ],
    dontBelongTo: [
      'Goths','Huns','Magyars','Malay','Persians'
    ],
  },
  {
    name: 'chemistry',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Chemistry',
      '(300 Food, 200 Gold)',
      'Research time 1:40 (Malian ally 56s); Missile units/buildings (except Gunpowder units) have +1 Attack. Required for Gunpowder units (Hand Cannoneer, Cannon Galleon, Bombard Cannon, Bombard Tower).',
    ],
  },
  {
    name: 'bombard-tower',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChild,
    desc: [
      'Research Bombard Tower',
      '(800 Food, 400 Wood)',
      'Research time 1:00 (Malian ally 33s); Lets you build Bombard Towers, which have an extremely powerful attack, but slow rate of fire.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Britons','Burmese','Celts','Ethiopians','Franks','Goths','Huns','Incas','Indians','Japanese','Khamer','Magyars','Malians','Mayans','Mongols','Persians','Saracens','Slavs','Vikings'
    ],
  },
  {
    name: 'ballistics',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Ballistics',
      '(300 Wood, 175 Gold)',
      'Research time 1:00 (Malian ally 33s); Arrow-firing units/buildings, Bombard Towers and Fire Ships fire more accurately at moving targets (by aiming where the unit will go instead of where it is).',
    ],
  },
  {
    name: 'siege-engineers',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Siege Engineers',
      '(500 Food, 600 Wood)',
      'Research time 45s (Malian ally 25s); Siege Weapons have +1 range (except Rams) and 20% more attack bonus vs. Buildings (+200 Attack for Petards).',
    ],
    dontBelongTo: [
      'Byzantines','Chinese','Goths','Huns','Italians','Malians','Mayans','Persians','Spanish','Turks'
    ],
  },
  {
    name: 'university',
    positionColumn: positionColumn5,
    svgTechParentSize: '428',
    svgParentPosition: '-182px',
    desc: [
      'Build University',
      '(200 Wood)',
      'Construction time 1:00; Used to improve Buildings and missile units. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 2100; Armor: 2; Pierce Armor: 9; Line of sight: 6 (Town Watch/Patrol +4 each).'
    ],
  },
  {
    name: 'guard-tower',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Upgrade to Guard Tower',
      '(100 Food, 250 Wood)',
      'Research time 30s (Malian ally 17s); Upgrades your Watch Towers and lets you build Guard Towers, which are stronger (+2 Attack, +2 against Ships) and better armored (+1/+1 Armor, +480 HP).',
    ],
    dontBelongTo: [
      'Goths','Huns',
    ],
  },
  {
    name: 'keep',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Upgrade to Keep',
      '(500 Food, 350 Wood)',
      'Research time 1:40 (Malian ally 56s); Upgrades your Guard Towers and lets you build Keeps, which are stronger (+1 Attack, +1 against Ships) and better armored (+1/+1 Armor, +750HP).',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Franks','Goths','Huns','Indians','Magyars','Mongols','Persians','Slavs','Vikings'
    ],
  },
  {
    name: 'heated-shot',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Heated Shot',
      '(350 Food, 100 Gold)',
      'Research time 30s (Malian ally 17s); Towers/Castles have increased bonus damage against Ships: Castles +4, Watch Towers +9, Guard Towers +11, Keeps +13, Bombard Towers +50. Only affects the first arrow.',
    ],
    dontBelongTo: [
      'Byzantines','Franks','Huns','Japanese','Mongols','Saracens','Slavs','Spanish'
    ],
  },
  {
    name: 'arrowslits',
    positionColumn: positionColumnChildAge,
    desc: [
      'Research Arrowslits',
      '(250 Food, 250 Wood)',
      'Research time 25s (Malian ally 14s); Watch Towers/Guard Towers/Keeps +1/+2/+3 Attack (For all arrows).',
    ],
    dontBelongTo: [
      'Burmese','Ethiopians','Goths','Huns','Indians','Khamer','Magyars','Malay','Malians','Mayans','Mongols','Persians','Portuguese','Slavs'
    ],
  },
  {
    name: 'murder-holes',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Murder Holes',
      '(200 Food, 100 Stone)',
      'Research time 1:00 (Malian ally 33s); Eliminates the minimum range of all Towers and Castles so they can fire at enemies attacking their base.',
    ],
  },
  {
    name: 'treadmill-crane',
    positionColumn: positionColumn6,
    svgSize: svgSizeChildBelowParent,
    isLast: last255,
    isLastOfTech,
    desc: [
      'Research Treadmill Crane',
      '(300 Food, 200 Wood)',
      'Research time 50s (Malian ally 28s); Villagers construct Buildings 20% faster.',
    ],
    dontBelongTo: [
      'Britons','Byzantines','Chinese','Ethiopians','Goths','Huns','Indians','Malay','Mongols','Persians','Spanish'
    ],
  },
  //#endregion
  //#region Mining Camp & Lumber Camp
  {
    name: 'mining-camp',
    positionColumn: positionColumn1,
    svgTechParentSize: '72.5',
    svgParentPosition: '-4.25px',
    isAlignCenter,
    desc: [
      'Build Mining Camp',
      '(100 Wood)',
      'Construction time 35s; Used to deposit stone and gold and research stone-mining and gold-mining improvements. Build near stone or gold mines to gather these resources faster. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 600; Armor: 0; Pierce Armor: 7; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'stone-mining',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Stone Mining',
      '(100 Food, 75 Wood)',
      'Research time 30s; Villagers mine stone 15% faster.',
    ],
  },
  {
    name: 'stone-shaft-mining',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last385,
    desc: [
      'Research Stone Shaft Mining',
      '(200 Food, 150 Wood)',
      'Research time 1:15; Villagers mine stone 15% faster.',
    ],
    dontBelongTo: [
      'Britons','Burmese','Franks','Huns','Japanese','Magyars','Saracens','Slavs','Turks','Vikings'
    ],
  },
  {
    name: 'gold-mining',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Gold Mining',
      '(100 Food, 75 Wood)',
      'Research time 30s; Villagers mine gold 15% faster.',
    ],
  },
  {
    name: 'gold-shaft-mining',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLast: last385,
    isLastOfTech,
    desc: [
      'Research Gold Shaft Mining',
      '(200 Food, 150 Wood)',
      'Research time 1:15; Villagers mine gold 15% faster.',
    ],
    dontBelongTo: [
      'Goths','Italians','Mayans','Portuguese','Spanish','Teutons','Vietnamese'
    ],
  },
  {
    name: 'lumber-camp',
    positionColumn: positionColumn1,
    desc: [
      'Build Lumber Camp',
      '(100 Wood)',
      'Construction time 35s; Used to deposit wood and research wood-gathering improvements. Build near forests to gather wood faster. Upgrades: Line of sight (Town Center); hit points, Armor (University); more resistant to Monks (Monastery).',
      'Hit Pts: 600; Armor: 0; Pierce Armor: 7; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'double-bit-axe',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Double-Bit Axe',
      '(100 Food, 50 Wood)',
      'Research time 25s; Villagers chop wood 20% faster.',
    ],
  },
  {
    name: 'bow-saw',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Bow Saw',
      '(150 Food, 100 wood)',
      'Research time 50s; Villagers chop wood 20% faster.',
    ],
  },
  {
    name: 'two-man-saw',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    isLastOfTech,
    desc: [
      'Research Two-Man Saw',
      '(300 Food, 200 Wood)',
      'Research time 1:40; Villagers chop wood 10% faster.',
    ],
    dontBelongTo: [
      'Aztecs','Berbers','Celts','Franks','Incas','Khamer','Malay','Malians','Mongols'
    ],
  },
  //#endregion
  //#region Mill
  {
    name: 'cartography',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Cartography',
      '(free)',
      'Instant research; You and your allies share the same line of sight (you see what they see).',
    ],
  },
  {
    name: 'caravan',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Caravan',
      '(200 Food, 200 Gold)',
      'Research time 40s; Trade Carts and Trade Cogs move 50% faster (so gold accumulates faster).',
    ],
  },
  {
    name: 'guilds',
    positionColumn: positionColumnChildAge2,
    desc: [
      'Research Guilds',
      '(300 Food, 200 Gold)',
      'Research time 50s; Reduces the trading fee to 15% from 30%, making buying/selling resources more efficient.',
    ],
    dontBelongTo: [
      'Aztecs','Chinese','Franks','Japanese','Khamer','Magyars','Mongols','Saracens','Slavs','Vikings'
    ],
  },
  {
    name: 'market',
    positionColumn: positionColumn3,
    svgSize: svgSizeChildAge2BelowParent,
    svgTechParentSize: '144.5',
    svgParentPosition: '-40.25px',
    desc: [
      'Build Market',
      '(175 Wood)',
      'Construction time 1:00; Used to buy and sell resources, trade with other players by land, and research trade improvements. The further apart two markets are, the more efficient a tradeline is.',
      'Hit Pts: 1800; Armor: 1; Pierce Armor: 8; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'coinage',
    positionColumn: positionColumnChild,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Research Coinage',
      '(200 Food, 100 Gold)',
      'Research time 1:10; Reduces fee for tributes to 20%.',
    ],
  },
  {
    name: 'banking',
    positionColumn: positionColumnChildAge,
    svgSize: svgSizeChildAge,
    desc: [
      'Research Banking',
      '(300 Food, 200 Gold)',
      'Research time 1:10; Tributes are free.',
    ],
  },
  {
    name: 'trade-cart',
    positionColumn: positionColumn4,
    svgSize: svgSizeChildBelowParent,
    isLast: last530,
    isLastOfTech,
    desc: [
      'Build Trade Cart',
      '(100 Wood, 50 Gold)',
      'Creation time 51s; Should usually be chosen over Trade Cogs when possible, as extra docks for military production can mess up the water tradeline; Class: None; Speed: 1 (1.5) Line of sight: 7.',
      'Hit Pts: 70; Melee/Pierce Armor: 0/0; Range: 0.',
    ],
  },
  {
    name: 'mill',
    positionColumn: positionColumn1,
    svgTechParentSize: '239',
    svgParentPosition: '-135px',
    desc: [
      'Build Mill',
      '(100 Wood)',
      'Construction time 35s; Used to deposit food and research farming improvements. Build near a forage bush or other source of food to gather food faster. Required for Farm, Market.',
      'Hit Pts: 600; Armor: 0; Pierce Armor: 7; Line of sight: 6 (Town Watch/Patrol +4 each).',
    ],
  },
  {
    name: 'horse-collar',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2BelowParent,
    desc: [
      'Research Horse Collar',
      '(75 Food, 75 Wood)',
      'Research time 20s; Farms produce +75 food so they last longer before you must rebuild them.',
    ],
  },
  {
    name: 'heavy-plow',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Heavy Plow',
      '(125 Food, 125 Wood)',
      'Research time 40s; Farms produce +125 food so they last longer before you must rebuild them. Farmers carry +1 food.',
    ],
  },
  {
    name: 'crop-rotation',
    positionColumn: positionColumnChildAge2,
    svgSize: svgSizeChildAge2,
    desc: [
      'Research Crop Rotation',
      '(250 Food, 250 Wood)',
      'Research time 1:10; Farms produce +175 food so they last longer before you must rebuild them.',
    ],
    dontBelongTo: [
      'Aztecs','Celts','Chinese','Ethiopians','Huns','Indians','Japanese','Koreans','Mongols','Saracens','Spanish','Turks'
    ],
  },
  {
    name: 'farm',
    positionColumn: positionColumn2,
    svgSize: svgSizeChildBelowParent,
    desc: [
      'Build Farm',
      '(60 Wood)',
      'Construction time 15s; Contains 175 food (250/375/550 food) (Chinese ally +45 food).',
      'Hit Pts: 480; Armor: 0; Pierce Armor: 0; Line of sight: 1 (Town Watch/Patrol +4 each) Villagers will deposit any resource they hold when building a farm.',
    ],
  },
  //#endregion
];

export default techData;
