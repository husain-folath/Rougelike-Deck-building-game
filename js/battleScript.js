console.log("Bye!")
//make the button send the player to the battle page
const quitBtn= document.getElementById("quitBtn");
quitBtn.addEventListener("click", ()=>
{
    window.location.href="index.html";
})

const cards =
[
{ID:1,name: "Enchanting blood",cost:3, type:"Power", effect: "nextDamage*2", description:"doubles the next instance of damage.",  img: "url"}
]
console.log(cards)