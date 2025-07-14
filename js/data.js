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
    cost: 0,
    type: "Skill",
    heal: 4,
    description: "Restores 4 health to the player.",
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
    maxHealth: 10,
    health: 10,
    temper: "aggressive",
    deck: [1, 2, 5],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 2,
    name: "Cave Troll",
    maxHealth: 20,
    health: 20,
    temper: "defensive",
    deck: [3, 4, 6],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 3,
    name: "Skeleton Archer",
    maxHealth: 8,
    health: 8,
    temper: "aggressive",
    deck: [1, 7, 8],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 4,
    name: "Dark Mage",
    maxHealth: 12,
    health: 12,
    temper: "defensive",
    deck: [9, 10, 2],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 5,
    name: "Orc Warrior",
    maxHealth: 15,
    health: 15,
    temper: "aggressive",
    deck: [2, 5, 7],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 6,
    name: "Bandit Leader",
    maxHealth: 13,
    health: 13,
    temper: "aggressive",
    deck: [1, 3, 8],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 7,
    name: "Stone Golem",
    maxHealth: 25,
    health: 25,
    temper: "defensive",
    deck: [4, 6, 9],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 8,
    name: "Vampire",
    maxHealth: 11,
    health: 11,
    temper: "aggressive",
    deck: [7, 10, 1],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 9,
    name: "Necromancer",
    maxHealth: 14,
    health: 14,
    temper: "defensive",
    deck: [3, 9, 5],
    image: "url",
    move: "",
    moveId: ""
  },
  {
    id: 10,
    name: "Fire Elemental",
    maxHealth: 16,
    health: 16,
    temper: "aggressive",
    deck: [4, 6, 10],
    image: "url",
    move: "",
    moveId: ""
  }
];

export {cards , enemies}