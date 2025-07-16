
let difficulty=0
// console.log("Hello")

const easyBtn= document.getElementById("easyBtn") 
const normalBtn= document.getElementById("normalBtn") 
const hardBtn= document.getElementById("hardBtn") 
const howToPlayBtn= document.getElementById("howToPlayBtn") 
const backBtn= document.getElementById("backBtn") 

const howToPlayScreenElement=document.getElementById("howToPlayScreen") 
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
        // console.log(difficulty)
    })
)
// console.log(difficulty)

sessionStorage.setItem("difficulty",difficulty)

// console.log(sessionStorage.getItem("difficulty"))
const startBtn=document.getElementById("startBtn")


//make the button send the player to the battle page
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
        console.log("hello")
        howToPlayScreenElement.classList.remove("hidden")
    }
)
backBtn.addEventListener
(
    "click", ()=>
    {
        console.log("hello")
        howToPlayScreenElement.classList.add("hidden")
    }
)
    // easyBtn.addEventListener("click", event=>
    // {
    //     document.querySelectorAll("button").forEach(button =>button.disabled=false)
    //     event.target.disabled=true
        
    // })
    // normalBtn.addEventListener("click", event=>
    // {
    //     document.querySelectorAll("button").forEach(button =>button.disabled=false)
    //     event.target.disabled=true
        
    // })
    // hardBtn.addEventListener("click", event=>
    // {
    //     document.querySelectorAll("button").forEach(button =>button.disabled=false)
    //     event.target.disabled=true
    // })

    // const clickedBtn=document.querySelector(".disabled")
    
    // if( clickedBtn.classList.contains("easyBtn")) difficulty=-1;
    // else if (clickedBtn.classList.contains("hardBtn")) difficulty=1;
    // else difficulty=0;
    
// export function getDifficulty(){
//     return difficulty
// }
