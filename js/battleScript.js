import {cards , enemies} from './data.js'
/*-------------------------------- Constants --------------------------------*/

const difficulty=sessionStorage.getItem("difficulty")

const currentEnemies=[]


const player =
{
  health:40,maxHealth:40,shield:0,maxShield:0, deck:[], unusedDeck:[ 2, 5, 6, 7, 8, 11, 13, 14, 3, 10, 12, 15, 4, 9, 1, 16, 10, 7, 11, 8, 6, 2, 14, 15, 3  ], usedDeck:[],
}



/*-------------------------------- Variables --------------------------------*/
let playerCardsElement=[]
let turn
let gameState
let currentCards=[]


/*------------------------ Cached Element References ------------------------*/
const quitBtn= document.getElementById("quitBtn");
const endQuitBtn= document.getElementById("endQuitBtn");
const endTurnDeckBtn= document.getElementById("endTurnDeckBtn");
const endScreenElement=document.getElementById("endScreen")
const playAgainBtnElement=document.getElementById("playAgainBtn")
let enemiesElement=document.querySelectorAll(".enemy")


/*----------------------------- Event Listeners -----------------------------*/
quitBtn.addEventListener("click", ()=>
  {
    window.location.href="index.html";
  })

endQuitBtn.addEventListener("click", ()=>
  {
    window.location.href="index.html";
  })

  endTurnDeckBtn.addEventListener("click", endTurn)
  
  playAgainBtnElement.addEventListener("click", init)
  
  
  

/*-------------------------------- Functions --------------------------------*/
init()

function init(){

  endScreenElement.classList.add("hidden")
  player.maxHealth=40
  player.maxHealth-=10*difficulty
  player.health=player.maxHealth
  player.maxShield=0
  player.shield=0
  gameState="battle"
  removeAllEnemies()
  updatePlayerBars()
  createPlayerdeck()
  createEnemyTeam()
  selectEnemyMove()
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

  const newCardImage=document.createElement("img")
  newCardImage.classList.add("cardImage","cardPart")
  newCardImage.src=`./assets/cards/${newCardInfo.name}.png`;
  newCardImage.alt=newCardInfo.alt;


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

  const newEnemyImage=document.createElement("img")
  newEnemyImage.classList.add("enemyImage","enemyPart")
  newEnemyImage.src=`./assets/enemies/${newEnemyInfo.name}.png`;
  newEnemyImage.alt=newEnemyInfo.alt;

  const newEnemyAction=document.createElement("div")
  newEnemyAction.classList.add("enemyAction","enemyPart")

  const newEnemyBars=document.createElement("div")
  newEnemyBars.classList.add("enemyBars","enemyPart")

  const newEnemyMaxHealth=document.createElement("div")
  newEnemyMaxHealth.classList.add("enemyMaxHealth","enemyPart")

  const newEnemyHealth=document.createElement("p")
  newEnemyHealth.classList.add("enemyHealth","enemyPart")
  newEnemyHealth.textContent=`${newEnemyInfo.health}/${newEnemyInfo.maxHealth}`

  const newEnemyCurrentHealth=document.createElement("div")
  newEnemyCurrentHealth.classList.add("enemyCurrentHealth","enemyPart")
  newEnemyCurrentHealth.style.width=`${(newEnemyInfo.health/newEnemyInfo.maxHealth)*100}%`
 
  const newEnemyMaxShield=document.createElement("div")
  newEnemyMaxShield.classList.add("enemyMaxShield","enemyPart","hidden")

  const newEnemyShield=document.createElement("p")
  newEnemyShield.classList.add("enemyShield","enemyPart")
  newEnemyShield.textContent=`${newEnemyInfo.health}/${newEnemyInfo.maxHealth}`

  const newEnemyCurrentShield=document.createElement("div")
  newEnemyCurrentShield.classList.add("enemyCurrentShield","enemyPart")


  newEnemyMaxShield.append(newEnemyCurrentShield,newEnemyShield)
  newEnemyMaxHealth.append(newEnemyCurrentHealth,newEnemyHealth)

  newEnemyBars.append(newEnemyMaxHealth, newEnemyMaxShield)
  newEnemy.append(newEnemyId,newEnemyName,newEnemyImage,newEnemyBars,newEnemyAction)

  const enemiesBelt = document.getElementById("enemiesBelt")
  enemiesBelt.appendChild(newEnemy)
    
  attachEnemyEventListeners()

}


function updatehealthBar()
{
  if(player.health>player.maxHealth) player.health=player.maxHealth
  
  if(player.health<=0) 
  {
    player.health=0
    gameState="defeat"
  }

  const healthBar =document.getElementById("currentHealth")
  healthBar.style.width=`${(player.health/player.maxHealth)*100}%`
 
  const healthBarLabel= document.getElementById("health")
  healthBarLabel.textContent=`${player.health}/${player.maxHealth}`

}

function updateShieldBar()
{
  if(player.shield>player.maxShield) player.maxShield=player.shield
  
  const shieldBar =document.getElementById("currentShield")
  const maxShieldBar =document.getElementById("maxShield")

  if(player.shield<=0) 
  {
    maxShieldBar.style.display="none"
    player.shield=0
    player.maxShield=0
  }
  else
  {
    maxShieldBar.style.display="block"
    shieldBar.style.width=`${(player.shield/player.maxShield)*100}%`
  }
  const shieldBarLabel= document.getElementById("shield")

  shieldBarLabel.textContent=`${player.shield}/${player.maxShield}`
}

function updatePlayerBars()
{
  updateShieldBar()
  updatehealthBar()
}

function createPlayerdeck() {
  for (let i = 0; i < player.deck.length; i++) 
  {
    player.usedDeck.push(player.deck[i]);
  }

  currentCards=[]
  player.deck = [];
  removeAllCards()

  for (let i = 0; i < 5; i++) 
  {
    if (player.unusedDeck.length === 0) {
      player.unusedDeck = player.usedDeck;
      player.usedDeck = [];
    }

    let unusedDeckLength = player.unusedDeck.length;

    if (unusedDeckLength === 0) {
      break;
    }

    let index = Math.floor(Math.random() * unusedDeckLength);
    let cardIdx = player.unusedDeck[index];
   

    if (!cardIdx) {
      window.alert(" Selected card is undefined", index, player.unusedDeck);
      continue;
    }
    
    createCard(cardIdx);             
    currentCards.push(structuredClone(cards.find(card=>card.id===cardIdx)))
    player.deck.push(cardIdx);      
    player.unusedDeck.splice(index, 1); 
  }

  attachCardEventListeners() 
}

function drawCards(drawCount)
{
  for (let i= drawCount; i >0; i--) 
  {
    if (player.unusedDeck.length === 0) {
      player.unusedDeck = player.usedDeck;
      player.usedDeck = [];
    }

    let unusedDeckLength = player.unusedDeck.length;

    if (unusedDeckLength === 0) {
      window.alert("No cards left to draw!");
      break;
    }

    let index = Math.floor(Math.random() * unusedDeckLength);
    let cardIdx = player.unusedDeck[index];
   

    if (!cardIdx) {
      window.alert("Selected card is undefined", index, player.unusedDeck);
      continue;
    }
    
    createCard(cardIdx);            
    currentCards.push(structuredClone(cards.find(card=>card.id===cardIdx)))        
    player.deck.push(cardIdx);       
    player.unusedDeck.splice(index, 1); 
  }
  attachCardEventListeners() 
}  

function createEnemyTeam()
{
  for(let i=0;i<4;i++)
  {
    let newEnemyIdx=Math.ceil(Math.random()*enemies.length)
    createEnemy(newEnemyIdx)
    currentEnemies[i]=structuredClone(enemies.find(enemy=>enemy.id===(newEnemyIdx)))
  }
  enemiesElement = [...document.querySelectorAll(".enemy")];
  
}

function handleClick (event) 
{ if(gameState==="battle" && turn==="player")
  {
    playerCardsElement = [...document.getElementsByClassName("card")];

    enemiesElement = [...document.querySelectorAll(".enemy")];

    if(event.target.classList.contains("cardPart"))
    {
      let cardElement=null

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
          const selectedCardIndex = Array.from(selectedCard.parentElement.children).indexOf(selectedCard);

          if("heal" in card)
          {
            player.health+=currentCards[selectedCardIndex].heal
          }

          if("shield" in card)
          {
            player.shield+=currentCards[selectedCardIndex].shield
          }
            
          if("powerup" in card)
          {
              
            for(let i=0;i<currentCards.length;i++)
            {
              if("damage" in currentCards[i])
              {
                currentCards[i].damage*=currentCards[selectedCardIndex].powerup
              }
            }
          }

          if("draw" in card)
          {
            drawCards(card.draw)
          }

          if("addDamage" in card)
          {
            for(let i=0;i<currentCards.length;i++)
            {
              if("damage" in currentCards[i])
              {
                currentCards[i].damage+=currentCards[selectedCardIndex].addDamage
              }
            }
          }

          if("dodge" in card)
          {
            if(!player.dodge)
            {
              player.dodge=0
            }
            player.dodge+=card.dodge
          }

          player.usedDeck.push(card.id)
          player.deck.splice(selectedCardIndex,1)
          player.health-=(currentCards[selectedCardIndex].cost)
          currentCards.splice(selectedCardIndex,1)
          updatePlayerBars()
          removeSelectedCard()
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

      if(checkSelectedCard())
      {
        let selectedCard= getSelectedCard()

        let cardId=Number(selectedCard.querySelector(".cardId").textContent)
        
        const card =cards.find(card=>card.id===cardId)

        if("damage" in card)
        { 
          
          const selectedCardIndex = Array.from(selectedCard.parentElement.children).indexOf(selectedCard);
          const enemyIndex = Array.from(enemyElement.parentElement.children).indexOf(enemyElement);
          
          player.usedDeck.push(card.id)
          player.deck.splice(selectedCardIndex,1)
          player.health-=(currentCards[selectedCardIndex].cost)
          
          if(currentEnemies[enemyIndex].shield && currentEnemies[enemyIndex].shield>0 && !currentCards[selectedCardIndex].pierce===true)
          {
            if(currentCards[selectedCardIndex].damage<currentEnemies[enemyIndex].shield)
            {
              currentEnemies[enemyIndex].shield-=currentCards[selectedCardIndex].damage
              enemyElement.querySelector(".enemyCurrentShield").style.width=`${(currentEnemies[enemyIndex].shield/currentEnemies[enemyIndex].maxShield)*100}%`
              enemyElement.querySelector(".enemyShield").textContent=`${currentEnemies[enemyIndex].shield}/${currentEnemies[enemyIndex].maxShield}`
              currentCards[selectedCardIndex].damage=0
            }
            else
            {
              currentCards[selectedCardIndex].damage-=currentEnemies[enemyIndex].shield
              currentEnemies[enemyIndex].shield=0
              currentEnemies[enemyIndex].maxShield=0
              enemyElement.querySelector(".enemyCurrentShield").style.width=`${(currentEnemies[enemyIndex].shield/currentEnemies[enemyIndex].maxShield)*100}%`
              enemyElement.querySelector(".enemyShield").textContent=`${currentEnemies[enemyIndex].shield}/${currentEnemies[enemyIndex].maxShield}`
              enemyElement.querySelector(".enemyMaxShield").classList.add("hidden")
            
            }
          }

          currentEnemies[enemyIndex].health-=currentCards[selectedCardIndex].damage
          enemyElement.querySelector(".enemyCurrentHealth").style.width=`${(currentEnemies[enemyIndex].health/currentEnemies[enemyIndex].maxHealth)*100}%`
          enemyElement.querySelector(".enemyHealth").textContent=`${currentEnemies[enemyIndex].health}/${currentEnemies[enemyIndex].maxHealth}`
          
          if("heal" in card)
          {
            player.health+=currentCards[selectedCardIndex].heal
          }

          if("shield" in card)
          {
            player.shield+=currentCards[selectedCardIndex].shield
          }
            
          if("powerup" in card)
          {
              
            for(let i=0;i<currentCards.length;i++)
            {
              if("damage" in currentCards[i])
              {
                currentCards[i].damage*=currentCards[selectedCardIndex].powerup
              }
            }
          }

          if("draw" in card)
          {
            drawCards(card.draw)
          }

          if("addDamage" in card)
          {
            for(let i=0;i<currentCards.length;i++)
            {
              if("damage" in currentCards[i])
              {
                currentCards[i].damage+=currentCards[selectedCardIndex].addDamage
              }
            }
          }

          if("dodge" in card)
          {
            if(!player.dodge)
            {
              player.dodge=0
            }

            player.dodge+=card.dodge
          }

          if(currentEnemies[enemyIndex].health<=0)
          {
            enemyElement.remove()
            currentEnemies.splice(enemyIndex,1)              
          }

          enemiesElement= document.querySelectorAll(".enemy")
          currentCards.splice(selectedCardIndex,1)
          updatePlayerBars()
          removeSelectedCard()
        }
      }
    }

    if(player.deck.length===0) endTurn();
    checkGameState()
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

function removeAllEnemies()
{
  enemiesElement = [...document.getElementsByClassName("enemy")];
  
  enemiesElement.forEach(enemy=> enemy.remove())
}

function selectEnemyMove()
{
  enemiesElement = [...document.querySelectorAll(".enemy")];
  currentEnemies.forEach((enemy)=>
  {
    let enemyMoveIdx=Math.floor(Math.random()*enemy.deck.length)
    enemy.moveId=enemy.deck[enemyMoveIdx]
    enemy.move=cards.find(card=>card.id===enemy.moveId) 
  })

  enemiesElement.forEach((enemyCard, enemyCardIdx)=>
  {
    let enemyAction=enemyCard.getElementsByClassName("enemyAction")
    enemyAction[0].innerText=""
    if("damage" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${currentEnemies[enemyCardIdx].move.damage} 🗡️`
    }

    if("pierce" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} 🛡️❌`
    }

    if("shield" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} ${currentEnemies[enemyCardIdx].move.shield} 🛡️`
    }

    if("powerup" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} 💪`
    }

    if("draw" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} 🃏`  
    }

    if("dodge" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} 💨`
    }

    if("heal" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} ${currentEnemies[enemyCardIdx].move.heal} ❤️`
    }

    if("blind" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} 👀🚫`
    }

    if("addDamage" in currentEnemies[enemyCardIdx].move)
    {
      enemyAction[0].innerText=`${enemyAction[0].innerText} ⚔️+`
    }

    if("freeze" in currentEnemies[enemyCardIdx].move)
    {
    enemyAction[0].innerText=`${enemyAction[0].innerText} ❄️`
    }
  })
}

function endTurn()
{
  if(gameState==="battle")
  {
    turn="enemy"

    currentEnemies.forEach(enemy=>
    {
      let enemyElementIdx=currentEnemies.indexOf(enemy)
      let enemyElement= enemiesElement[enemyElementIdx]
      let enemyMove=enemy.move

      if("damage" in enemyMove)
      {
        if(player.dodge)
        {
          player.dodge-=1
          if(player.dodge<=0) delete player.dodge
          return
        }

        if(!("pierce" in enemyMove===true))
        {
          if(player.shield>=0)
          {
            if(enemyMove.damage>player.shield)
            {
              player.health-=(enemyMove.damage-player.shield)
              player.shield-=enemyMove.damage
            }
            else
            {
              player.shield-=enemyMove.damage
            }
          }
        }
        else
        {
          player.health-=enemyMove.damage
        }
      }

      if("heal" in enemyMove)
      {
        currentEnemies[enemyElementIdx].health+=enemyMove.heal
        if(enemy.health>enemy.maxHealth)enemy.health=enemy.maxHealth;
        enemyElement.querySelector(".enemyCurrentHealth").style.width=`${(currentEnemies[enemyElementIdx].health/currentEnemies[enemyElementIdx].maxHealth)*100}%`
        enemyElement.querySelector(".enemyHealth").textContent=`${currentEnemies[enemyElementIdx].health}/${currentEnemies[enemyElementIdx].maxHealth}`
      }

      if("shield" in enemyMove)
      {
        if(enemyElement.querySelector(".enemyMaxShield").classList.contains("hidden"))
        {
          enemyElement.querySelector(".enemyMaxShield").classList.remove("hidden")
        }

        if(!currentEnemies[enemyElementIdx].shield) currentEnemies[enemyElementIdx].shield=0,currentEnemies[enemyElementIdx].maxShield=0;

        currentEnemies[enemyElementIdx].shield+=enemyMove.shield

        if(enemy.shield>enemy.maxShield)enemy.maxShield=enemy.shield;

        if(enemy.shield<=0)
        {
          enemy.maxShield=0
          enemyElement.querySelector(".enemyMaxShield").classList.add("hidden")
        }

        enemyElement.querySelector(".enemyCurrentShield").style.width=`${(currentEnemies[enemyElementIdx].shield/currentEnemies[enemyElementIdx].maxShield)*100}%`
        enemyElement.querySelector(".enemyShield").textContent=`${currentEnemies[enemyElementIdx].shield}/${currentEnemies[enemyElementIdx].maxShield}`
      }
      
    

    })

    createPlayerdeck()
    selectEnemyMove()
    turn="player"
  }

  updatePlayerBars()
  checkGameState()
}

function checkGameState()
{
  if(gameState==="battle")
  {
    enemiesElement = [...document.querySelectorAll(".enemy")];
    
    if(enemiesElement.length===0)
    {
      gameState="victory"
      endScreenElement.classList.remove("hidden")
      endScreenElement.querySelector("h2").textContent="You Won!!"
    }
  }
  else if(gameState==="defeat")
  {
    endScreenElement.classList.remove("hidden")
    endScreenElement.querySelector("h2").textContent="You Lost :(."
  }
}