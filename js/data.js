//list of available cards
const cards = [
  {
    id: 1,
    name: "Blood Surge",
    cost: 3,
    type: "Power",
    powerup: 2,
    description: "Gain a temporary double damage on current cards.",
    img: "url"
  },
  {
    id: 2,
    name: "Crimson Slash",
    cost: 2,
    type: "Attack",
    damage: 6,
    description: "Deals 6 damage with a vicious red arc.",
    img: "url"
  },
  {
    id: 3,
    name: "Sanguine Shield",
    cost: 2,
    type: "Defense",
    shield: 7,
    description: "Generates 7 shield from hardened blood.",
    img: "url"
  },
  {
    id: 4,
    name: "Bloodlust",
    cost: 1,
    type: "Power",
    draw: 2,
    description: "Draw 2 cards in a rush of frenzy.",
    img: "url"
  },
  {
    id: 5,
    name: "Vampiric Grasp",
    cost: 2,
    type: "Skill",
    damage: 3,
    heal: 3,
    description: "Deals 3 damage and heals 3 from stolen life.",
    img: "url"
  },
  {
    id: 6,
    name: "Pain Focus",
    cost: 1,
    type: "Power",
    draw: 1,
    description: "Channel your pain to draw 1 extra card.",
    img: "url"
  },
  {
    id: 7,
    name: "Blood Needle",
    cost: 1,
    type: "Attack",
    damage: 4,
    pierce: true,
    description: "Pierces armor to deal 4 unblockable damage.",
    img: "url"
  },
  {
    id: 8,
    name: "Bleeding Wound",
    cost: 3,
    type: "Attack",
    damage: 8,
    description: "Inflicts a deep slash dealing 8 damage.",
    img: "url"
  },
  {
    id: 9,
    name: "Sanguine Mist",
    cost: 2,
    type: "Skill",
    dodge: 2,
    description: "Evade 2 attacks with a mist of blood.",
    img: "url"
  },
  {
    id: 10,
    name: "Vital Echo",
    cost: 1,
    type: "Skill",
    heal: 5,
    description: "Recover 5 health as your blood steadies.",
    img: "url"
  },
  {
    id: 11,
    name: "Crimson Bite",
    cost: 2,
    type: "Attack",
    damage: 5,
    heal: 2,
    description: "Deal 5 damage and recover 2 health.",
    img: "url"
  },
  {
    id: 12,
    name: "Blood Veil",
    cost: 2,
    type: "Defense",
    shield: 6,
    description: "Summon a crimson barrier granting 6 shield.",
    img: "url"
  },
  {
    id: 13,
    name: "Hemorrhage",
    cost: 2,
    type: "Attack",
    damage: 6,
    description: "Tear flesh and deal 6 intense damage.",
    img: "url"
  },
  {
    id: 14,
    name: "Pulse Strike",
    cost: 2,
    type: "Attack",
    damage: 5,
    description: "Strike with a surge of rhythm for 5 damage.",
    img: "url"
  },
  {
    id: 15,
    name: "Blood Mirror",
    cost: 3,
    type: "Defense",
    shield: 5,
    description: "Reflect pain with a 5 shield blood barrier.",
    img: "url"
  },
  {
  id: 16,
  name: "Blood Mend",
  cost: 3,
  type: "Skill",
  heal: 7,
  description: "Restore 7 health to yourself.",
  img: "url"
}
];


const enemies = [
  {
    id: 1,
    name: "Blood Ghoul",
    maxHealth: 14,
    health: 14,
    temper: "aggressive",
    deck: [2, 5, 7, 13, 3], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 2,
    name: "Bone Priest",
    maxHealth: 12,
    health: 12,
    temper: "defensive",
    deck: [3, 10, 15, 13, 16], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 3,
    name: "Flesh Hound",
    maxHealth: 18,
    health: 18,
    temper: "aggressive",
    deck: [5, 8, 13, 14, 12], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 4,
    name: "Blood Mage",
    maxHealth: 11,
    health: 11,
    temper: "defensive",
    deck: [3, 10, 12, 16, 2], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 5,
    name: "Crimson Reaver",
    maxHealth: 16,
    health: 16,
    temper: "aggressive",
    deck: [2, 7, 14, 13, 11], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 6,
    name: "Vile Butcher",
    maxHealth: 15,
    health: 15,
    temper: "aggressive",
    deck: [5, 8, 11, 13, 3], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 7,
    name: "Sanguine Warden",
    maxHealth: 20,
    health: 20,
    temper: "defensive",
    deck: [3, 12, 15, 16, 2], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 8,
    name: "Leech Fiend",
    maxHealth: 12,
    health: 12,
    temper: "aggressive",
    deck: [5, 10, 11, 2, 13], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 9,
    name: "Blood Cultist",
    maxHealth: 13,
    health: 13,
    temper: "defensive",
    deck: [3, 5, 12, 13, 10], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 10,
    name: "Skull Templar",
    maxHealth: 19,
    health: 19,
    temper: "defensive",
    deck: [12, 14, 15, 3, 2],
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 11,
    name: "Thirsting Shade",
    maxHealth: 10,
    health: 10,
    temper: "aggressive",
    deck: [7, 8, 13, 11, 14], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 12,
    name: "Ritual Acolyte",
    maxHealth: 11,
    health: 11,
    temper: "defensive",
    deck: [3, 10, 12, 15, 13],
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 13,
    name: "Carnage Spawn",
    maxHealth: 14,
    health: 14,
    temper: "aggressive",
    deck: [2, 5, 13, 11, 8], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 14,
    name: "Blood Knight",
    maxHealth: 17,
    health: 17,
    temper: "aggressive",
    deck: [11, 14, 2, 7, 5], 
    image: "url",
    move: {},
    moveId: null
  },
  {
    id: 15,
    name: "Vessel of Pain",
    maxHealth: 22,
    health: 22,
    temper: "defensive",
    deck: [3, 10, 12, 15, 13], 
    image: "url",
    move: {},
    moveId: null
  }
];


export {cards , enemies}