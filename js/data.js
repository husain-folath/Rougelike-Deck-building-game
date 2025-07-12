//list of available cards
const cards = 
[
  {
    id: 1,
    name: "Enchanting blood",
    cost: 3,
    type: "Power",
    powerup: 2,
    description: "Doubles the next instance of damage.",
    img: "url"
  },
  {
    id: 2,
    name: "Flame Burst",
    cost: 2,
    type: "Attack",
    damage: 5,
    description: "Deals 5 damage to the enemy.",
    img: "url"
  },
  {
    id: 3,
    name: "Stone Skin",
    cost: 3,
    type: "Defense",
    shield: 8,
    description: "Adds 8 armor to the player.",
    img: "url"
  },
  {
    id: 4,
    name: "Adrenaline Rush",
    cost: 1,
    type: "Power",
    draw:2,
    description: "Draw 2 additional cards.",
    img: "url"
  },
  {
    id: 5,
    name: "Shadow Step",
    cost: 1,
    type: "Skill",
    dodge:1,
    description: "Evade the next attack completely.",
    img: "url"
  },
  {
    id: 6,
    name: "Piercing Arrow",
    cost: 2,
    type: "Attack",
    damage:4,
    description: "Deals 4 damage that ignores armor.",
    img: "url"
  },
  {
    id: 7,
    name: "Healing Touch",
    cost: 4,
    type: "Skill",
    heal: 6,
    description: "Restores 6 health to the player.",
    img: "url"
  },
  {
    id: 8,
    name: "Blinding Light",
    cost: 2,
    type: "Skill",
    blind:1,
    description: "Blinds the enemy, causing them to miss their next turn.",
    img: "url"
  },
  {
    id: 9,
    name: "Berserker Rage",
    cost: 5,
    type: "Power",
    adddamage:4,
    description: "Gain +4 damage on all attacks.",
    img: "url"
  },
  {
    id: 10,
    name: "Ice Shield",
    cost: 3,
    type: "Defense",
    shield:5,
    freeze:1,
    description: "Adds 5 armor and freezes the next enemy to hit you.",
    img: "url"
  }
];

const enemies = 
[
  {
    id: 1,
    name: "Goblin Raider",
    maxHealth: 100,
    health: 100,
    temper: "aggressive",
    deck: [1, 2, 5],
    image: "url"
  },
  {
    id: 2,
    name: "Cave Troll",
    maxHealth: 200,
    health: 200,
    temper: "defensive",
    deck: [3, 4, 6],
    image: "url"
  },
  {
    id: 3,
    name: "Skeleton Archer",
    maxHealth: 80,
    health: 80,
    temper: "aggressive",
    deck: [1, 7, 8],
    image: "url"
  },
  {
    id: 4,
    name: "Dark Mage",
    maxHealth: 120,
    health: 120,
    temper: "defensive",
    deck: [9, 10, 2],
    image: "url"
  },
  {
    id: 5,
    name: "Orc Warrior",
    maxHealth: 150,
    health: 150,
    temper: "aggressive",
    deck: [2, 5, 7],
    image: "url"
  },
  {
    id: 6,
    name: "Bandit Leader",
    maxHealth: 130,
    health: 130,
    temper: "aggressive",
    deck: [1, 3, 8],
    image: "url"
  },
  {
    id: 7,
    name: "Stone Golem",
    maxHealth: 250,
    health: 250,
    temper: "defensive",
    deck: [4, 6, 9],
    image: "url"
  },
  {
    id: 8,
    name: "Vampire",
    maxHealth: 110,
    health: 110,
    temper: "aggressive",
    deck: [7, 10, 1],
    image: "url"
  },
  {
    id: 9,
    name: "Necromancer",
    maxHealth: 140,
    health: 140,
    temper: "defensive",
    deck: [3, 9, 5],
    image: "url"
  },
  {
    id: 10,
    name: "Fire Elemental",
    maxHealth: 160,
    health: 160,
    temper: "aggressive",
    deck: [4, 6, 10],
    image: "url"
  }
];

export {cards , enemies}