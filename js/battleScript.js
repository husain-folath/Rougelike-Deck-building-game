import {cards , enemies} from './data.js'
// console.log(sessionStorage.getItem("difficulty"))
/*-------------------------------- Constants --------------------------------*/

const difficulty=sessionStorage.getItem("difficulty")

const currentEnemies=[]

const player =
{
  health:40,maxHealth:40,shield:0,maxShiled:0, deck:[], unusedDeck:[7,2,3,6,2], usedDeck:[],
}



/*-------------------------------- Variables --------------------------------*/
let playerCardsElement=[]
let turn



/*------------------------ Cached Element References ------------------------*/
const quitBtn= document.getElementById("quitBtn");
// const shuffleDeckBtn= document.getElementById("shuffleDeckBtn");
const endTurnDeckBtn= document.getElementById("endTurnDeckBtn");
let enemiesElement=document.querySelectorAll(".enemy")




/*----------------------------- Event Listeners -----------------------------*/
//make the button send the player to the battle page
quitBtn.addEventListener("click", ()=>
  {
    window.location.href="index.html";
  })

  // shuffleDeckBtn.addEventListener("click", createPlayerdeck)
  endTurnDeckBtn.addEventListener("click", endTurn)
  

  
  
  

/*-------------------------------- Functions --------------------------------*/

function init(){
  player.maxHealth-=10*difficulty
  player.health=player.maxHealth
  updatehealthBar()
  createPlayerdeck()
  createEnemyTeam()
  attachCardEventListeners() 
  attachEnemyEventListeners()
  turn="player"
}

function attachCardEventListeners() 
{
  playerCardsElement = [...document.getElementsByClassName("card")];

  playerCardsElement.forEach(card=>
  {
      card.addEventListener('click',handleClick)
  })
}
function attachEnemyEventListeners()
{
  const enemiesElement = document.querySelectorAll(".enemy");

  enemiesElement.forEach(enemy=>
  {
      enemy.addEventListener('click',handleClick)
  })
}
// console.log(cards)
function createCard(cardId)
{
  const newCardInfo=cards.find(card=>card.id===cardId)
    
  const newCard= document.createElement("div")
  newCard.classList.add("card","cardPart")

  const newCardId= document.createElement("p")
  newCardId.classList.add("cardId","cardPart")
  newCardId.textContent=newCardInfo.id
    
  const newCardName=document.createElement("div")
  newCardName.classList.add("cardName","cardPart")
  newCardName.textContent=newCardInfo.name

  const newCardMid=document.createElement("div")
  newCardMid.classList.add("cardMid","cardPart")

  const newCardImage=document.createElement("div")
  newCardImage.classList.add("cardImage","cardPart")
  newCardImage.textContent=newCardInfo.img

  const newCardCost=document.createElement("div")
  newCardCost.classList.add("cardCost","cardPart")
  newCardCost.textContent=newCardInfo.cost

  const newCardDescription=document.createElement("div")
  newCardDescription.classList.add("cardDescription","cardPart")
  newCardDescription.textContent=newCardInfo.description

  newCardMid.append(newCardCost,newCardImage)

  newCard.append(newCardId,newCardName,newCardMid,newCardDescription)

  const cardsBelt = document.getElementById("cardsBelt")
  cardsBelt.appendChild(newCard)
  //  document.body.appendChild(newCard)

  // console.log(newCard)
}

function createEnemy(enemyId)
{
  const newEnemyInfo=enemies.find(enemy=>enemy.id===enemyId)
    
  const newEnemy= document.createElement("div")
  newEnemy.classList.add("enemy","enemyPart")

  const newEnemyId= document.createElement("p")
  newEnemyId.classList.add("enemyId","enemyPart")
  newEnemyId.textContent=newEnemyInfo.id
    
  const newEnemyName=document.createElement("div")
  newEnemyName.classList.add("enemyName","enemyPart")
  newEnemyName.textContent=newEnemyInfo.name

  const newEnemyImage=document.createElement("div")
  newEnemyImage.classList.add("enemyImage","enemyPart")
  newEnemyImage.textContent=newEnemyInfo.image

  const newEnemyAction=document.createElement("div")
  newEnemyAction.classList.add("enemyAction","enemyPart")
  newEnemyAction.textContent="5 🗡️"

  const newEnemyMaxHealth=document.createElement("div")
  newEnemyMaxHealth.classList.add("enemyMaxHealth","enemyPart")

  const newEnemyHealth=document.createElement("p")
  newEnemyHealth.classList.add("enemyHealth","enemyPart")
  newEnemyHealth.textContent=`${newEnemyInfo.health}/${newEnemyInfo.maxHealth}`

  const newEnemyCurrentHealth=document.createElement("div")
  newEnemyCurrentHealth.classList.add("enemyCurrentHealth","enemyPart")
  newEnemyCurrentHealth.style.width=`${(newEnemyInfo.health/newEnemyInfo.maxHealth)*100}%`
 

  newEnemyMaxHealth.append(newEnemyCurrentHealth,newEnemyHealth)

  newEnemy.append(newEnemyId,newEnemyName,newEnemyImage,newEnemyMaxHealth,newEnemyAction)

  const enemiesBelt = document.getElementById("enemiesbelt")
  enemiesBelt.appendChild(newEnemy)
    
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

function createPlayerdeck() {
  // Move all current deck cards to usedDeck
  for (let i = 0; i < player.deck.length; i++) {
    player.usedDeck.push(player.deck[i]);
  }
  player.deck = [];
  removeAllCards()
  for (let i = 0; i < 4; i++) {
    // Refill unusedDeck if it's empty
    if (player.unusedDeck.length === 0) {
      console.log("Refilling unusedDeck from usedDeck");
      player.unusedDeck = player.usedDeck;
      player.usedDeck = [];
    }

    // Update length AFTER possible refill
    let unusedDeckLength = player.unusedDeck.length;

    // Avoid trying to get a card if unusedDeck is still empty
    if (unusedDeckLength === 0) {
      console.warn("No cards left to draw!");
      break;
    }

    let index = Math.floor(Math.random() * unusedDeckLength);
    let card = player.unusedDeck[index];
   

    if (!card) {
      console.error("Selected card is undefined", index, player.unusedDeck);
      continue;
    }
    console.log(card)
    
    createCard(card);              // render/prepare card
    player.deck.push(card);       // add to active deck
    player.unusedDeck.splice(index, 1); // remove from unused
  }
  attachCardEventListeners() 
}


  
  

function createEnemyTeam()
{
  for(let i=0;i<4;i++)
  {
    createEnemy(i+1)
    currentEnemies[i]=enemies.find(enemy=>enemy.id===(i+1))
  }
  // console.log(currentEnemies)
  enemiesElement = [...document.querySelectorAll(".enemy")];
  // console.log(enemiesElement)
  
}









function handleClick (event) 
{
  playerCardsElement = [...document.getElementsByClassName("card")];

  enemiesElement = [...document.querySelectorAll(".enemy")];

  if(event.target.classList.contains("cardPart"))
  {
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

    if(cardElement.classList.contains("selected"))
    {

      let selectedCard= getSelectedCard()

      let cardId=Number(selectedCard.querySelector(".cardId").textContent)

      const card =cards.find(card=>card.id===cardId)

      if("damage" in card===false)
      {
        if("heal" in card)
        {
          console.log(`you healed ${card.heal} Health!!`)
          player.health+=card.heal
        }

        if("shield" in card)
        {
          player.shield+=card.shield
          console.log(`shielded up ${card.shield}`)
        }
          
        if("powerup" in card)
        {
            
          console.log(`powered up`)
        }
        const selectedCardIndex = Array.from(selectedCard.parentElement.children).indexOf(selectedCard);
        player.usedDeck.push(card.id)
        player.deck.splice(selectedCardIndex,1)
        player.health-=(card.cost)
        updatehealthBar()

        //  playerCardsElement=[...document.getElementsByClassName("card")]
        removeSelectedCard()
        // selectedCard.remove()
        console.log('player.unusedDeck',player.unusedDeck)
        console.log('player.usedDeck',player.usedDeck)
        console.log('player.deck',player.deck)
      }
    }
    else
    {
      if(checkSelectedCard())
      {
          playerCardsElement.forEach(card => card.classList.remove("selected"))
      } 

      cardElement.classList.add("selected")
    }
  }
  else if (event.target.classList.contains("enemyPart"))
  {
    let enemyElement=null

    if(!event.target.classList.contains("enemy"))
    {
      enemyElement =event.target.parentElement;
            
      while(enemyElement.classList.contains("enemy")!==true)
      {
        enemyElement =enemyElement.parentElement;
      }
    }
    else
    {
      enemyElement=event.target
    }
    console.log(enemyElement)
      // console.log(playerCardsElement)
    if(checkSelectedCard())
    {
      let selectedCard= getSelectedCard()

      let cardId=Number(selectedCard.querySelector(".cardId").textContent)
      
      const card =cards.find(card=>card.id===cardId)

      if("damage" in card)
      { 
        const selectedCardIndex = Array.from(selectedCard.parentElement.children).indexOf(selectedCard);
        player.usedDeck.push(card.id)
        player.deck.splice(selectedCardIndex,1)
        // console.log(`you dealt ${card.damage} damage!!`)
        player.health-=(card.cost)
        updatehealthBar()
        //  playerCardsElement=[...document.getElementsByClassName("card")]
        removeSelectedCard()
        // selectedCard.remove()
        const enemyIndex = Array.from(enemyElement.parentElement.children).indexOf(enemyElement);
        currentEnemies[enemyIndex].health-=card.damage
        enemyElement.querySelector(".enemyCurrentHealth").style.width=`${(currentEnemies[enemyIndex].health/currentEnemies[enemyIndex].maxHealth)*100}%`
        enemyElement.querySelector(".enemyHealth").textContent=`${currentEnemies[enemyIndex].health}/${currentEnemies[enemyIndex].maxHealth}`
        if(currentEnemies[enemyIndex].health<=0)
        {
          enemyElement.remove()
          currentEnemies.splice(enemyIndex,1)

        }
        enemiesElement= document.querySelectorAll(".enemy")

        console.log('player.unusedDeck',player.unusedDeck)
        console.log('player.usedDeck',player.usedDeck)
        console.log('player.deck',player.deck)
        // console.log(enemiesElement)
        // console.log(enemyIndex)
        // console.log(currentEnemies)
        // console.log(card)
        // console.log("Attacked an enemy")

      }

      

      
    }
    else
    {

      console.log(currentEnemies)
      console.log("Enemy")
    }
  }
}

function removeSelectedCard()
{
  playerCardsElement = [...document.getElementsByClassName("card")];
  const selectedCard = playerCardsElement.find(card =>card.classList.contains("selected"))

  if (selectedCard) 
  {
    selectedCard.remove();
  }
}

function checkSelectedCard()
{
  return playerCardsElement.find(card => card.classList.contains("selected"))
}

function getSelectedCard()
{
  const selectedCard=playerCardsElement.find(card => card.classList.contains("selected"))
  return selectedCard
}

function removeAllCards()
{
  playerCardsElement = [...document.getElementsByClassName("card")];
  
  playerCardsElement.forEach(card=> card.remove())
}

function endTurn()
{
  turn="enemy"
  createPlayerdeck()
  
  console.log(turn)
  turn="player"
  console.log(turn)
}

init()
// function handleClick2 (event){

//   let enemyElement =null

//   if(!event.target.classList.contains("enemy"))
//         {
//             cardElement =event.target.parentElement;
            
//             while(cardElement.classList.contains("card")!==true)
//             {
//                 cardElement =cardElement.parentElement;
//             }
//         }
//         else
//         {
//             cardElement=event.target
//         }
// }
