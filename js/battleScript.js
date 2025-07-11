// const { createElement } = require("react");

const player =
{
    health:100,maxhealth:100,
}

//list of available cards
const cards =
[
{id:1,name: "Enchanting blood",cost:3, type:"Power", effect: "nextDamage*2", description:"doubles the next instance of damage.",  img: "url"}
]


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

    newCard.append(newCardName,newCardMid,newCardDescription)

    document.body.appendChild(newCard)

    // console.log(newCard)
}

createCard(1)

function updatehealthBar()
{
 const healthBar =document.getElementById("currentHealth")
 healthBar.style.width=`${(player.health/player.maxhealth)*100}%`
 
const healthBarLabel= document.getElementById("health")
healthBarLabel.textContent=`${player.health}/${player.maxhealth}`

}
// const maxHealthBar= document.getElementById("maxHealth")
// console.log(maxHealthBar)
updatehealthBar()
