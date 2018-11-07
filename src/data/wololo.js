const civs = [
  {
    name: 'Aztecs',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold',
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold',
  },
  {
    name: 'Berbers',
    bonus: [
      'Villagers move 10% faster',
      'Stable units cost -15/20% in Castle/Imperial Age',
      'Ships move 10% faster',
    ],
    uniqueUnit:
      'Camel Archer (Cavalry Archer with bonus against other Cavalry Archers) Genitour (mounted Skirmisher)',
    castleAgeTech: 'Kasbah (Team Castle work +25% faster)',
    imperialAgeTech: 'Maghrabi Camels (Camel troops regenerate 1 HP/4s)',
    teamBonus: 'Genitour available in Archery Range',
  },
  {
    name: 'Britons',
    bonus: [
      'Town Centers cost -50% wood in Castle Age',
      'Foot Archers (except Skirmishers) have +1/+2 range in Castle/Imperial Age',
      'Shepherds work 25% faster',
    ],
    uniqueUnit: 'Longbowman (long-range Archer)',
    castleAgeTech:
      'Yeomen (Foot Archers and Skirmishers +1 range; Towers +2 Attack)',
    imperialAgeTech: 'Warwolf (Trebuchets get 0.5 blast radius, 100% accuracy)',
    teamBonus: 'Archery Ranges work 20% faster',
  },
  {
    name: 'Burmese',
    bonus: [
      'Free Lumbercamp upgrades',
      'Infantry +1 Attack per Age (Starting in Feudal Age)',
      'Monastery techs cost -50%',
    ],
    uniqueUnit: 'Arambai (Powerful, but inaccurate ranged cavalry)',
    castleAgeTech: 'Howdah (Battle Elephants +1/+2 Armor)',
    imperialAgeTech:
      'Manipur Cavalry (Cavalry and Arambai +6 Attack vs. Buildings, +3 of that blockable by building armor)',
    teamBonus: 'Relics visible on map',
  },
  {
    name: 'Byzantines',
    bonus: [
      'Buildings +10/20/30/40% HP in Dark/Feudal/Castle/Imperial Age',
      'Camels, Skirmishers, Spear-line cost -25%',
      'Fire Ships attack 20% faster',
      'Town Watch is free',
      'Advance to Imperial Age cost -33%',
    ],
    uniqueUnit: 'Cataphract (anti-Infantry Cavalry)',
    castleAgeTech: 'Greek Fire (Fire Ships +1 range)',
    imperialAgeTech:
      'Logistica (Cataphracts cause 5 blast dmg (0.5 radius) and get +6 extra Attack vs. Ifantry)',
    teamBonus: 'Monks +50% heal speed',
  },
  {
    name: 'Celts',
    bonus: [
      'Infantry move 15% faster',
      'Lumberjacks work 15% faster',
      'Siege Weapons fire 25% faster',
      'Can convert sheep even if enemy are next to them',
    ],
    uniqueUnit: 'Woad Raider (fast-moving Infantry)',
    castleAgeTech: 'Stronghold (Castle, Towers fire 25% faster)',
    imperialAgeTech: 'Furor Celtica (Siege Workshop units have +40% hit points',
    teamBonus: 'Siege Workshops work 20% faster',
  },
  {
    name: 'Chinese',
    bonus: [
      'Start with +3 Villagers but -50 wood, -200 food',
      'Technologies cost -10/15/20% in Feudal/Castle/Imperial Age',
      'Town Centers support 10 population',
      'Town Center +5 Line of sight',
      'Demolition Ships +50% hit points',
    ],
    uniqueUnit: 'Chu Ko Nu (fast-firing Archer)',
    castleAgeTech: 'Great Wall (Walls and Towers +30% HP)',
    imperialAgeTech: 'Rocketry (Chu Ko Nus +2P, Scorpions +4P Attack)',
    teamBonus: 'Farms +45 food',
  },
  {
    name: 'Ethiopians',
    bonus: [
      'Archer-line fires 18% faster',
      'Receive +100 gold, +100 food when advancing to the next Age',
      'Pikeman upgrades free',
    ],
    uniqueUnit: 'Shotel Warrior (Strong, but vulnerable Infantry)',
    castleAgeTech: 'Royal Heirs (Shotel Warriors are created twice as fast)',
    imperialAgeTech: 'Torsion Engines (Rams, Onagers blast radius +0.5)',
    teamBonus: 'Towers and Outposts +3 LoS',
  },
  {
    name: 'Franks',
    bonus: [
      'Foragers work 25% faster',
      'Castles cost -25%',
      'Cavalry +20% hit points',
      'Farm upgrades free (required Mill)',
    ],
    uniqueUnit: 'Throwing Axeman (ranged Infantry)',
    castleAgeTech: 'Chivalry (Stables work 40% faster)',
    imperialAgeTech: 'Bearded Axe (Throwing Axemen +1 range)',
    teamBonus: 'Knights +2 line of sight',
  },
  {
    name: 'Goths',
    bonus: [
      'Infantry cost -35% starting in Feudal Age',
      'Infantry +1 Attack vs. Buildings',
      'Villagers +5 Attack vs. wild boar; hunters carry +15 meat',
      '+10 population in Imperial Age',
    ],
    uniqueUnit: 'Huskarl (anti-Archer Infantry)',
    castleAgeTech: 'Anarchy (create Huskarls at Barracks)',
    imperialAgeTech: 'Perfusion (Barracks work 2x faster)',
    teamBonus: 'Barracks work 20% faster',
  },
  {
    name: 'Huns',
    bonus: [
      'Do not need houses, but start with -100 wood',
      'Cavalry Archers, Genitours cost -10/20% in Castle/Imperial Age',
      'Trebuchets +35% accuracy (50% instead of 15%)',
    ],
    uniqueUnit: 'Tarkan (medium Cavalry with bonus against Buildings)',
    castleAgeTech: 'Marauders (Create Tarkans at Stables)',
    imperialAgeTech:
      'Atheism (+100 years Relic, Wonder victories; Spies/Treason costs -50%)',
    teamBonus: 'Stables work 20% faster',
  },
  {
    name: 'Incas',
    bonus: [
      'Start with a free llama',
      'Villagers affected by Infantry Blacksmith upgrades',
      'Houses support 10 population',
      'Buildings cost -15% stone',
    ],
    uniqueUnit:
      'Kamayuk (anti-Cavalry Infantry), Slinger (anti-Infantry Archer)',
    castleAgeTech:
      'Andean Sling (Skirmishers, Slingers and Genitours no minimum range)',
    imperialAgeTech: 'Couriers (Kamayuks, Slingers, Eagles +1/+2 Armor)',
    teamBonus: 'Farms built twice as fast',
  },
  {
    name: 'Indians',
    bonus: [
      'Villagers cost -10/15/20/25% in Dark/Feudal/Castle/Imperial Age',
      'Fisherman work 15% faster and carry +15',
      'Camels +0/+1 Armor',
    ],
    uniqueUnit:
      'Elephant Archer (High HP, slow Cavalry Archer), Imperial Camel (Camel upgrade)',
    castleAgeTech: 'Sultans (All good income 10% faster)',
    imperialAgeTech: 'Shatagni (Hand Cannoneers +1 range)',
    teamBonus: 'Camels +6, Mamelukes/Camel Archers +5 Attack vs. Buildings',
  },
  {
    name: 'Italians',
    bonus: [
      'Advancing to the next Age costs -15%',
      'Dock techs cost -50%',
      'Fishing Ships cost -15%',
      'Gunpowder units cost -20%',
    ],
    uniqueUnit:
      'Genoese Crossbowman (anti-Cavalry Archer), Condottiero (anti-Gunpowder Infantry)',
    castleAgeTech: 'Pavise (Foot Archers +1/+1 Armor)',
    imperialAgeTech: 'Silk Road (Trade units cost -50%)',
    teamBonus: 'Condottiero available in Barracks in Imperial Age',
  },
  {
    name: 'Japanese',
    bonus: [
      'Fishing Ships 2x hit points; +2 Pierce Armor; work rate +5/10/15/20% in Dark/Feudal/Castle/Imperial Age',
      'Mill, Lumber/Mining Camps cost -50%',
      'Infantry attack 33% faster starting in Feudal Age',
    ],
    uniqueUnit: 'Samurai (Infantry with bonus against Unique Units)',
    castleAgeTech: 'Yasama (Towers fire 2 extra arrows)',
    imperialAgeTech: 'Kataparuto (Trebuchets fire 33% /pack 4x faster)',
    teamBonus: 'Galleys +50% line of sight',
  },
  {
    name: 'Khamer',
    bonus: [
      'No buildings required to advance to the next Age or to unlock other buildings',
      'Battle Elephants +15% faster',
      'Houses can shelter 5 villagers',
    ],
    uniqueUnit: 'Ballista Elephant (Cavalry siege)',
    castleAgeTech: 'Tusk Swords (Battle Elephants +3 Attack)',
    imperialAgeTech:
      'Double Crossbow (Ballista Elephants and Scorpions shoot two projectiles)',
    teamBonus: 'Scorpions +1 range',
  },
  {
    name: 'Koreans',
    bonus: [
      'Villagers +3 line of sight',
      'Stone miners work 20% faster',
      'Walls and Castles build 33% faster, Towers built 5% faster',
      'Tower upgrades free (Bombard Tower requires Chemistry)',
      'Tower +1/+2 range in Castle/Imperial Age',
    ],
    uniqueUnit:
      'War Wagon (High HP, anti-Archer Cavalry Archer), Turtle Ship (heavily armored warship)',
    castleAgeTech: 'Panokseon (Turtle Ships move 15% faster)',
    imperialAgeTech: 'Shinkichon (Onager-line +1 range)',
    teamBonus: 'Onager-line minimum range reduced to 1',
  },
  {
    name: 'Magyars',
    bonus: [
      'Villagers kill wolves with 1 strike',
      'Forging, Iron Casting, Blast Furnace free',
      'Scout Cavalry, Light Cavalry, Hussar cost -15%',
    ],
    uniqueUnit: 'Magyar Huszar (Light Cavalry)',
    castleAgeTech: 'Mercenaries (Magyar Huszars cost no gold)',
    imperialAgeTech: 'Recurve Bow (Cavalry Archer-line +1 range, +1 Attack)',
    teamBonus: 'Foot Archers +2 LoS',
  },
  {
    name: 'Malay',
    bonus: [
      'Advancing to Ages +80% faster',
      'Fish Traps cost -33%',
      'Fish Traps provide unlimited food',
      'Battle Elephants cost -30%',
    ],
    uniqueUnit: 'Karambit Warrior (cheap infantry)',
    castleAgeTech:
      'Thalassocracy (Upgrades your Docks to Harbors, which fire arrows)',
    imperialAgeTech: 'Forced Levy (Militia-line cost no gold)',
    teamBonus: 'Docks +100% LoS',
  },
  {
    name: 'Malians',
    bonus: [
      'Buildings cost -15% wood (except Farms)',
      'Barracks units +1 Pierce Armor per Age (starting from Feudal Age)',
      'Gold Mining upgrades free',
    ],
    uniqueUnit: 'Gbeto (ranged Infantry)',
    castleAgeTech: 'Tigui (Town Centers fire 5 extra arrows, even empty)',
    imperialAgeTech: 'Farimba (Cavalry, Camels +5 Attack)',
    teamBonus: 'University researches +80% faster',
  },
  {
    name: 'Mayans',
    bonus: [
      'Start with +1 villager, but -50 food',
      'Resources last 15% longer, but farmers work 3% slower',
      'Archers cost -10/20/30% in Feudal/Castle/Imperial Age',
    ],
    uniqueUnit: 'Plumed Archer (fast-moving Archer)',
    castleAgeTech:
      'Obsidian Arrows (Archer-line +6 Attack vs. Buildings, +6 vs. Stone Defense)',
    imperialAgeTech: 'El Dorado (Eagle Warriors have +40 hit points)',
    teamBonus: 'Walls cost -50%',
  },
  {
    name: 'Mongols',
    bonus: [
      'Cavalry Archers, Mangudai, Genitour fire 25% faster',
      'Light Cavalry, Hussar +30% hit points',
      'Hunters work 50% faster',
    ],
    uniqueUnit: 'Mangudai (fast-firing Cavalry Archer)',
    castleAgeTech: 'Nomads (Destroyed houses don’t lose population room)',
    imperialAgeTech: 'Drill (Siege Workshop units move 50% faster)',
    teamBonus: 'Scout-Line +2 line of sight',
  },
  {
    name: 'Persians',
    bonus: [
      'Start with +50 wood, food',
      'Town Center, Dock 2x hit points; work rate +10/15/20% in Feudal/Castle/Imperial Age',
    ],
    uniqueUnit: 'War Elephant (slow, heavy Cavalry)',
    castleAgeTech:
      'Boiling Oil (Castles +9 Attack vs. Rams, only affects the first arrow)',
    imperialAgeTech: 'Mahouts (War Elephants move 30% faster)',
    teamBonus: 'Knights +2 Attack vs. Archers',
  },
  {
    name: 'Portuguese',
    bonus: [
      'All units cost -15% gold',
      'Ships +10% HP',
      'Can build Feitoria in Imperial Age (costs 250G, 250S, 20 population; produces 0.8 F+W/s, 0.45 G/s, 0.25 S/s)',
    ],
    uniqueUnit: 'Organ Gun (Gunpowder Siege), Caravel (Scorpion-like ship)',
    castleAgeTech: 'Carrack (Ships +1/+1 Armor)',
    imperialAgeTech: 'Arquebus (Ballistics for Gunpowder units)',
    teamBonus: 'Free Cartography from the Dark Age',
  },
  {
    name: 'Saracens',
    bonus: [
      'Market trade cost only 5%',
      'Market costs -75 wood',
      'Transport Ships 2x hit points, +5 carry capacity',
      'Galleys fire 25% faster',
      'Cavalry Archers +4 Attack vs. Buildings',
    ],
    uniqueUnit: 'Mameluke (short-range anti-Cavalry camel)',
    castleAgeTech: 'Madrasah (Killed Monks return 33% of their costs)',
    imperialAgeTech: 'Zealotry (Camels, Mamelukes +30 hit points)',
    teamBonus: 'Foot Archers +2 Attack vs. Buildings',
  },
  {
    name: 'Slavs',
    bonus: [
      'Farmers work +15% faster',
      'Tracking free',
      'Siege Workshop units cost -15%',
    ],
    uniqueUnit: 'Boyar (Cavalry with heavy Melee Armor)',
    castleAgeTech: 'Orthodoxy (Monks +3/+3 Armor)',
    imperialAgeTech:
      'Druzhina (Infantry deal 5 damage in 0.5 radius per attack)',
    teamBonus: 'Military Buildings provide +5 population',
  },
  {
    name: 'Spanish',
    bonus: [
      'Builders work 30% faster',
      'Blacksmith upgrades don’t cost gold',
      'Bombard Cannons and Hand Cannoneers fire 18% faster',
      'Cannon Galleons fire with ballistics, faster missiles',
    ],
    uniqueUnit:
      'Conquistador (mounted Hand Cannoneer), Missionary (mounted Monk)',
    castleAgeTech:
      'Inquisition (faster conversion: min/max conversion times -1s, -7s for Buildings)',
    imperialAgeTech: 'Supremacy (Villagers +6 Attack, +2/+2 Armor, +40 HP)',
    teamBonus: 'Trade units generate +25% gold',
  },
  {
    name: 'Teutons',
    bonus: [
      'Monks 2x healing range',
      'Towers garrison +5, TCs +10 units, max. number of arrows +4 (TCs +5)',
      'Murder Holes free',
      'Farms cost -33%',
    ],
    uniqueUnit: 'Teutonic Knight (Infantry with heavy Melee Armor)',
    castleAgeTech: 'Ironclad (Siege Weapons +4 Melee Armor)',
    imperialAgeTech:
      'Crenellations (+3 range Castle; garrisoned Infantry fire arrows)',
    teamBonus:
      'Units resist conversion: min/max. Conversion time +1s/+2s, conversion chance halved',
  },
  {
    name: 'Turks',
    bonus: [
      'Gunpowder units +25% hit points',
      'Researching Gunpowder technologies costs -50%; Chemistry free',
      'Gold miners work 20% faster',
      'Light Cavalry and Hussar upgrades free',
    ],
    uniqueUnit: 'Janissary (hand cannoneer)',
    castleAgeTech: 'Sipahi (Cavalry Archers, Genitours +20 HP)',
    imperialAgeTech:
      'Artillery (+2 range Bombard Towers, Bombard Cannons, Cannon Galleons)',
    teamBonus: 'Gunpowder units are created 25% faster',
  },
  {
    name: 'Vietnamese',
    bonus: [
      'Reveal enemy positions at game start',
      'Archery Range units +20% HP',
      'Conscription free',
    ],
    uniqueUnit: 'Rattan Archer (Archer with high pierce armor)',
    castleAgeTech: 'Chatras (Battle Elephants +50 HP)',
    imperialAgeTech: 'Paper Money (Tributes 500 gold to each Ally)',
    teamBonus: 'Have access to Imperial Skirmisher upgrade',
  },
  {
    name: 'Vikings',
    bonus: [
      'Warships cost -15/15/20% in Feudal/Castle/Imperial Age',
      'Infantry +10/15/20% HP in Feudal/Castle/Imperial Age',
      'Wheelbarrow, Hand Cart free',
    ],
    uniqueUnit: 'Berserk (regenerating Infantry); Longboat (warship)',
    castleAgeTech: 'Chieftains (Infantry +5 Attack vs. Cavalry, +2 vs. Camels)',
    imperialAgeTech:
      'Berserkergang (Berserks regenerate 2x faster, 1 HP/1.5s instead of 1 HP/3s)',
    teamBonus: 'Docks cost -15%',
  },
];

export default civs;
