import {cards , enemies} from './data.js'
console.log(sessionStorage.getItem("difficulty"))
const difficulty=sessionStorage.getItem("difficulty")

const player =
{
    health:40,maxHealth:40, deck:[1,7,2,3]
}



function init(){
    player.maxHealth-=10*difficulty
    player.health=player.maxHealth
    updatehealthBar()
    createPlayerdeck()
    createEnemy(1)
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
function createEnemy(enemyId)
{
    const newEnemyInfo=enemies.find(enemy=>enemy.id===enemyId)
    
    const newEnemy= document.createElement("div")
    newEnemy.classList.add("enemy")

    const newEnemyId= document.createElement("p")
    newEnemyId.classList.add("enemyId")
    newEnemyId.textContent=newEnemyInfo.id
    
    const newEnemyName=document.createElement("div")
    newEnemyName.classList.add("enemyName")
    newEnemyName.textContent=newEnemyInfo.name

    const newEnemyImage=document.createElement("div")
    newEnemyImage.classList.add("enemyImage")
    newEnemyImage.textContent=newEnemyInfo.image

    const newEnemyAction=document.createElement("div")
    newEnemyAction.classList.add("enemyAction")
    newEnemyAction.textContent="5 🗡️"

    const newEnemyMaxHealth=document.createElement("div")
    newEnemyMaxHealth.classList.add("enemyMaxHealth")

    const newEnemyHealth=document.createElement("p")
    newEnemyHealth.classList.add("enemyHealth")
    newEnemyHealth.textContent=`${player.health}/${player.maxHealth}`

    const newEnemyCurrentHealth=document.createElement("div")
    newEnemyCurrentHealth.classList.add("enemyCurrentHealth")
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
