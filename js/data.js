const cards = [
  {
    id: 1,
    name: "Blood Surge",
    cost: 3,
    type: "Power",
    powerup: 2,
    description: "Gain a temporary double damage on current cards.",
    alt: "A glowing blood rune surging with red energy."
  },
  {
    id: 2,
    name: "Crimson Slash",
    cost: 2,
    type: "Attack",
    damage: 6,
    description: "Deals 6 damage with a vicious red arc.",
    alt: "A sharp red slash cutting across a dark backdrop."
  },
  {
    id: 3,
    name: "Sanguine Shield",
    cost: 2,
    type: "Defense",
    shield: 7,
    description: "Generates 7 shield from hardened blood.",
    alt: "A circular shield made of solidified blood."
  },
  {
    id: 4,
    name: "Bloodlust",
    cost: 1,
    type: "Power",
    draw: 2,
    description: "Draw 2 cards in a rush of frenzy.",
    alt: "Eyes glowing with madness and blood trails."
  },
  {
    id: 5,
    name: "Vampiric Grasp",
    cost: 2,
    type: "Skill",
    damage: 3,
    heal: 3,
    description: "Deals 3 damage and heals 3 from stolen life.",
    alt: "A ghostly hand draining life from a crimson victim."
  },
  {
    id: 6,
    name: "Pain Focus",
    cost: 1,
    type: "Power",
    draw: 1,
    description: "Channel your pain to draw 1 extra card.",
    alt: "A clenched face framed in red aura and inner turmoil."
  },
  {
    id: 7,
    name: "Blood Needle",
    cost: 1,
    type: "Attack",
    damage: 4,
    pierce: true,
    description: "Pierces armor to deal 4 unblockable damage.",
    alt: "A thin blood-coated needle flying through steel."
  },
  {
    id: 8,
    name: "Bleeding Wound",
    cost: 3,
    type: "Attack",
    damage: 8,
    description: "Inflicts a deep slash dealing 8 damage.",
    alt: "A wide-open gash pouring blood across dark fabric."
  },
  {
    id: 9,
    name: "Sanguine Mist",
    cost: 2,
    type: "Skill",
    dodge: 2,
    description: "Evade 2 attacks with a mist of blood.",
    alt: "A red mist swirling like a spectral veil."
  },
  {
    id: 10,
    name: "Vital Echo",
    cost: 1,
    type: "Skill",
    heal: 5,
    description: "Recover 5 health as your blood steadies.",
    alt: "Echo waves pulsing from a beating heart."
  },
  {
    id: 11,
    name: "Crimson Bite",
    cost: 2,
    type: "Attack",
    damage: 5,
    heal: 2,
    description: "Deal 5 damage and recover 2 health.",
    alt: "Fangs dripping blood from a fresh wound."
  },
  {
    id: 12,
    name: "Blood Veil",
    cost: 2,
    type: "Defense",
    shield: 6,
    description: "Summon a crimson barrier granting 6 shield.",
    alt: "A magical red veil shimmering with protective runes."
  },
  {
    id: 13,
    name: "Hemorrhage",
    cost: 2,
    type: "Attack",
    damage: 6,
    description: "Tear flesh and deal 6 intense damage.",
    alt: "Dark claws raking through muscle with brutal force."
  },
  {
    id: 14,
    name: "Pulse Strike",
    cost: 2,
    type: "Attack",
    damage: 5,
    description: "Strike with a surge of rhythm for 5 damage.",
    alt: "A pulsating blade striking to the rhythm of a heartbeat."
  },
  {
    id: 15,
    name: "Blood Mirror",
    cost: 3,
    type: "Defense",
    shield: 5,
    description: "Reflect pain with a 5 shield blood barrier.",
    alt: "A glowing red mirror crackling with reflected damage."
  },
  {
    id: 16,
    name: "Blood Mend",
    cost: 3,
    type: "Skill",
    heal: 7,
    description: "Restore 7 health to yourself.",
    alt: "A hand stitching together with threads of blood."
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
    move: {},
    moveId: null,
    alt: "A hunched, pale creature with torn flesh and glowing red eyes."
  },
  {
    id: 2,
    name: "Bone Priest",
    maxHealth: 12,
    health: 12,
    temper: "defensive",
    deck: [3, 10, 15, 13, 16],
    move: {},
    moveId: null,
    alt: "A skeletal cultist in tattered robes clutching a ritual staff."
  },
  {
    id: 3,
    name: "Flesh Hound",
    maxHealth: 18,
    health: 18,
    temper: "aggressive",
    deck: [5, 8, 13, 14, 12],
    move: {},
    moveId: null,
    alt: "A quadrupedal beast with sinewy muscles and bloodied fangs."
  },
  {
    id: 4,
    name: "Blood Mage",
    maxHealth: 11,
    health: 11,
    temper: "defensive",
    deck: [3, 10, 12, 16, 2],
    move: {},
    moveId: null,
    alt: "A dark-robed mage channeling crimson energy through a blood sigil."
  },
  {
    id: 5,
    name: "Crimson Reaver",
    maxHealth: 16,
    health: 16,
    temper: "aggressive",
    deck: [2, 7, 14, 13, 11],
    move: {},
    moveId: null,
    alt: "A towering warrior with a blood-streaked axe and spiked armor."
  },
  {
    id: 6,
    name: "Vile Butcher",
    maxHealth: 15,
    health: 15,
    temper: "aggressive",
    deck: [5, 8, 11, 13, 3],
    move: {},
    moveId: null,
    alt: "A rotund, gore-covered figure wielding cleavers and meat hooks."
  },
  {
    id: 7,
    name: "Sanguine Warden",
    maxHealth: 20,
    health: 20,
    temper: "defensive",
    deck: [3, 12, 15, 16, 2],
    move: {},
    moveId: null,
    alt: "An armored sentinel with a crimson shield glowing with runes."
  },
  {
    id: 8,
    name: "Leech Fiend",
    maxHealth: 12,
    health: 12,
    temper: "aggressive",
    deck: [5, 10, 11, 2, 13],
    move: {},
    moveId: null,
    alt: "A twisted parasite humanoid with a long tongue and draining claws."
  },
  {
    id: 9,
    name: "Blood Cultist",
    maxHealth: 13,
    health: 13,
    temper: "defensive",
    deck: [3, 5, 12, 13, 10],
    move: {},
    moveId: null,
    alt: "A hooded figure chanting in blood circles with trembling hands."
  },
  {
    id: 10,
    name: "Skull Templar",
    maxHealth: 19,
    health: 19,
    temper: "defensive",
    deck: [12, 14, 15, 3, 2],
    move: {},
    moveId: null,
    alt: "A heavily armored knight with a skull-shaped helmet and crimson insignia."
  },
  {
    id: 11,
    name: "Thirsting Shade",
    maxHealth: 10,
    health: 10,
    temper: "aggressive",
    deck: [7, 8, 13, 11, 14],
    move: {},
    moveId: null,
    alt: "A ghostly, gray specter with red eyes and clawed wisps of fog trailing behind."
  },
  {
    id: 12,
    name: "Ritual Acolyte",
    maxHealth: 11,
    health: 11,
    temper: "defensive",
    deck: [3, 10, 12, 15, 13],
    move: {},
    moveId: null,
    alt: "A trembling youth with blood-smeared scrolls and wide, fanatical eyes."
  },
  {
    id: 13,
    name: "Carnage Spawn",
    maxHealth: 14,
    health: 14,
    temper: "aggressive",
    deck: [2, 5, 13, 11, 8],
    move: {},
    moveId: null,
    alt: "A grotesque mutant born of war, covered in spikes and raw muscle."
  },
  {
    id: 14,
    name: "Blood Knight",
    maxHealth: 17,
    health: 17,
    temper: "aggressive",
    deck: [11, 14, 2, 7, 5],
    move: {},
    moveId: null,
    alt: "A dark paladin with a crimson blade and glowing sigils on black armor."
  },
  {
    id: 15,
    name: "Vessel of Pain",
    maxHealth: 22,
    health: 22,
    temper: "defensive",
    deck: [3, 10, 12, 15, 13],
    move: {},
    moveId: null,
    alt: "A hulking figure bound in chains, bleeding endlessly but never falling."
  }
];


export {cards , enemies}