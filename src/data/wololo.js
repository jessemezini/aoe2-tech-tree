const civs = [
  {
    name: 'Aztecs',
    bonus: [
      'Villagers carry +5',
      'Military units - including Siege Weapons, Warships but no Monks - are created 18% faster',
      'Monks +5 hit points for each Monastery technology',
      'Start with +50 gold'
    ],
    uniqueUnit: 'Jaguar Warrior (anti-Infantry Infantry)',
    castleAgeTech: 'Atlatl (Skirmishers, Genitour +1 Attack, +1 Range)',
    imperialAgeTech: 'Garland Wars (Infantry +4 Attack)',
    teamBonus: 'Relics generate +33% gold',
    isSelected: true
  },
  {
    name: 'Berbers',
    bonus: [
      'Villagers move 10% faster',
      'Stable units cost -15/20% in Castle/Imperial Age',
      'Ships move 10% faster'
    ],
    uniqueUnit:
      'Camel Archer (Cavalry Archer with bonus against other Cavalry Archers) Genitour (mounted Skirmisher)',
    castleAgeTech: 'Kasbah (Team Castle work +25% faster)',
    imperialAgeTech: 'Maghrabi Camels (Camel troops regenerate 1 HP/4s)',
    teamBonus: 'Genitour available in Archery Range',
    isSelected: false
  }
];

export default civs;
