console.log("Hello")
const startBtn=document.getElementById("startBtn")


//make the button send the player to the battle page
startBtn.addEventListener("click", ()=>
{
    window.location.href="battle-arena.html";
})