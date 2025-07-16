const easyBtn= document.getElementById("easyBtn") 
const normalBtn= document.getElementById("normalBtn") 
const hardBtn= document.getElementById("hardBtn") 
const howToPlayBtn= document.getElementById("howToPlayBtn") 
const backBtn= document.getElementById("backBtn") 
const startBtn=document.getElementById("startBtn")
const howToPlayScreenElement=document.getElementById("howToPlayScreen") 

let difficulty=0
normalBtn.disabled=true;

const difficultyBtns=[easyBtn,normalBtn,hardBtn]

difficultyBtns.forEach(
    (button,index) =>

    button.addEventListener(
        "click", event=>
    {
        document.querySelectorAll("button").forEach(button =>button.disabled=false)
        event.target.disabled=true
        difficulty=(index-1);
        sessionStorage.setItem("difficulty",difficulty)
    })
)

startBtn.addEventListener
(
    "click", ()=>
    {
        window.location.href="battle-arena.html";
    }
)
   
howToPlayBtn.addEventListener
(
    "click", ()=>
    {
        howToPlayScreenElement.classList.remove("hidden")
    }
)
backBtn.addEventListener
(
    "click", ()=>
    {
        howToPlayScreenElement.classList.add("hidden")
    }
)

sessionStorage.setItem("difficulty",difficulty)
