// const { createElement } = require("react");
// import {getDifficulty} from "./mainScript.js"
// let difficulty=getDifficulty()
// console.log(difficulty)
console.log(sessionStorage.getItem("difficulty"))
const difficulty=sessionStorage.getItem("difficulty")

const player =
{
    health:40,maxHealth:40, deck:[1,7,2,3]
}

//list of available cards
const cards = [
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


function init(){
    player.maxHealth-=10*difficulty
    player.health=player.maxHealth
    updatehealthBar()
    createPlayerdeck()
}

init()


//make the button send the player to the battle page
const quitBtn= document.getElementById("quitBtn");
quitBtn.addEventListener("click", ()=>
    {
    window.location.href="index.html";
})


// console.log(cards)
function createCard(cardId)
{
    const newCardInfo=cards.find(card=>card.id===cardId)
    
    const newCard= document.createElement("div")
    newCard.classList.add("card")

    const newCardId= document.createElement("p")
    newCardId.classList.add("cardId")
    newCardId.textContent=newCardInfo.id
    
    const newCardName=document.createElement("div")
    newCardName.classList.add("cardName")
    newCardName.textContent=newCardInfo.name

    const newCardMid=document.createElement("div")
    newCardMid.classList.add("cardMid")

    const newCardImage=document.createElement("div")
    newCardImage.classList.add("cardImage")
    newCardImage.textContent=newCardInfo.img

    const newCardCost=document.createElement("div")
    newCardCost.classList.add("cardCost")
    newCardCost.textContent=newCardInfo.cost

    const newCardDescription=document.createElement("div")
    newCardDescription.classList.add("cardDescription")
    newCardDescription.textContent=newCardInfo.description

    newCardMid.append(newCardCost,newCardImage)

    newCard.append(newCardId,newCardName,newCardMid,newCardDescription)

    const cardsBelt = document.getElementById("cardsBelt")
    cardsBelt.appendChild(newCard)
    // document.body.appendChild(newCard)

    // console.log(newCard)
}



function updatehealthBar()
{
    if(player.health>player.maxHealth) player.health=player.maxHealth
    if(player.health<0) player.health=0
 const healthBar =document.getElementById("currentHealth")
 healthBar.style.width=`${(player.health/player.maxHealth)*100}%`
 
const healthBarLabel= document.getElementById("health")
healthBarLabel.textContent=`${player.health}/${player.maxHealth}`

}
// const maxHealthBar= document.getElementById("maxHealth")
// console.log(maxHealthBar)


function createPlayerdeck(){
    for(let i=0;i<player.deck.length;i++)
    {
        createCard(player.deck[i])
    }

}

const playerCardsElement=document.querySelectorAll(".card")

playerCardsElement.forEach(card=>
{
    card.addEventListener('click',handleClick)
})

function handleClick (event) {
       let cardElement=null
        //to target the whole card div
        if(!event.target.classList.contains("card"))
        {
            cardElement =event.target.parentElement;
            
            while(cardElement.classList.contains("card")!==true)
            {
                cardElement =cardElement.parentElement;
            }
        }
        else
        {
            cardElement=event.target
        }

        let cardId=Number(cardElement.querySelector(".cardId").textContent)
        const card =cards.find(card=>card.id===cardId)
        if("damage" in card)
        {
            console.log(`you dealt ${card.damage} damage!!`)
        }
        if("heal" in card)
        {
            console.log(`you healed ${card.heal} Health!!`)
            player.health+=card.heal
        }
        player.health-=(card.cost)
        updatehealthBar()
        cardElement.remove()
        console.log(card)
}
