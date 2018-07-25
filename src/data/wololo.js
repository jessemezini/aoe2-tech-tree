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
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Burmese',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Byzantines',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Celts',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Chinese',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Ethiopians',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Franks',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Goths',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Huns',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Incas',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Indians',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Italians',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Japanese',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Khamer',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Koreans',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Magyars',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Malay',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Malians',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Mayans',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Mongols',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Persians',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Portugueses',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Saracens',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Slavs',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Spanish',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Teutons',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Turk',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Vietnamese',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
  {
    name: 'Vikings',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold'
  },
];

export default civs;
