# Roguelike Deck Builder Game


### Home Page
## ![a prototype of how home page should look like.](assets/Home-page-draft.png)
### Battle Page
## ![a prototype of how main battle page should look like](assets/Battle-page-draft.png)

---

## 🕹️ Game Name: *[The Crimson Gambit]*

A **roguelike deck-building game** where players sacrifice **health to play powerful cards**. The game is inspired by titles like *Slay the Spire*, but introduces a risk-reward system where managing your HP is as important as managing your deck.

Players progress through encounters with enemies by strategically using cards drawn from their deck. Health is the primary resource used to play cards instead of traditional mana or energy. The game offers multiple difficulties, enemy types, and dynamic combat mechanics to create replayability.

**Why this game?**  
This concept explores the emotional and tactical weight of sacrificing your own vitality for victory. It challenges players to think critically and manage limited resources in creative ways.

---

## 🚀 Getting Started

- **Play the Game:** A link to the deployed game will be provided.
- **How to Play:** The game will include a "How to Play" button on the main menu explaining all mechanics.
- **Planning Materials:**
[draw.io](https://app.diagrams.net/#G1PyYV1US6-spDXPjkXFD70WIm6NSI6zyb#%7B%22pageId%22%3A%22N-C6wULLYs8-NzSbLSXE%22%7D) was used for the wireframe.
[Trello](https://trello.com/b/vqoMt1D0/rougelike-deck-builder-game) was used for time and task management. 

---

## 🧠 Game Design Plan

### 🎮 Game Features

- Difficulty Modes: Easy, Normal, Hard
- AI Difficulty Selection
- Difficulty affects card damage, cost, or effects
- Core Game Loop:  
  `Start Match → Draw Phase → Play Phase → Enemy Phase → End Turn → Check Win/Loss`
- Game States:  
  `Main Menu`, `Battle`, `Victory`, `Defeat`, `Pause`
- UI/UX Enhancements:
  - Card play animations: fade, glow, shake
  - Visual effects for damage, healing, and shielding
  - Floating text for damage numbers and status effects
  - Tooltips on hover for cards and enemies
  - Action log (e.g., “You played Blood Blade: -5 HP, 20 damage”)

---

### 🃏 Card System

Cards will be stored in an array of objects:

```js
let Cards = [card1, card2, card3];

let card = {
  ID: 1,
  name: "Enchanting Blood",
  cost: 3,
  type: "Power",
  effect: "nextDamage * 2",
  description: "Doubles the next instance of damage.",
  rarity: "Rare",
  img: "url"
};
```
## 🃏 Card Attributes

- **ID**
- **Name**
- **Cost**
- **Type**
- **Effect**
- **Description**
- **Image**
- **Rarity**

### Card Types May Include:
- Attack  
- Skill  
- Power  
- Curse  
- Status  

> Once the player loses, no further actions should be allowed.

---

## 🧍 Player System

- Dynamic health bar  
- HP decreases when taking damage, increases with healing  
- Game over when health reaches **0 or less**  
- Ensure health **never displays as negative**

---

## 🤖 PVE / Enemy System

Enemy cards function similarly to player cards.

```js
let enemies = [enemy1, enemy2, enemy3];

let Enemy = {
  ID: 1,
  name: "John Cena",
  Deck: [1, 2, 3],
  health: 50,
  img: "url"
};
```
## 🤖 Enemy AI Behavior

- **Simple AI** initially  
- **Thought bubble** displays enemy's intent (next move)

### AI Behavior Types

- **Aggressive:** Focuses on high damage  
- **Defensive:** Uses buffs or shields  
- **Mixed:** Follows patterns (e.g., attack → debuff → block)

---

## 🧱 Technologies Used

- JavaScript  
- HTML5  
- CSS3  

---

## 🙏 Attributions

- Not applicable yet. 


---

## 🚧 Next Steps

- Add a **deck-building system** between fights  
- Implement **relics** that provide passive effects  
- Introduce a **floor-based progression** map  
- Create **multiple unique enemies and bosses**  
- Add **sound effects and music**  
- Add **save/load functionality**  
- Ensure **mobile responsiveness**
