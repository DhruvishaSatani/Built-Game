let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg"); 

let userScoreCou= document.querySelector("#user-score");
let compScoreCou= document.querySelector("#comp-score");



choices.forEach((choice)=>{
      choice.addEventListener ("click",(e)=>{
          const userChoice= choice.getAttribute("id");
          plaGame(userChoice);
      })
})
const plaGame =(userChoice)=>{

    console.log("User choice:",userChoice);
    // generate computer choice
    const compChoise= genCompChoise();
    console.log("Computer Choice :",compChoise);
    if(userChoice === compChoise){
      drwamGame();
    }else{
        let userWin=true;
        if(userWin ==="rock"){
          // scissor,paper
          userWin =compChoise==="paper"?false:true;
        }else if(userWin === "paper"){
          // rock ,scissor
          userWin =compChoise ==="scissor"?false :true;
        }
        else{
          // paper,rock
          userWin =compChoise ==="rock"?false:true;
        }
        showWinner(userWin,compChoise,userChoice);
    }
}

const genCompChoise=()=>{

    const optioComp = ["rock","paper","scissor"];
    const randIndx= Math.floor(Math.random()*3);

    return optioComp[randIndx];
    
}
const drwamGame =()=>{
    console.log("This Game is Draw");
    msg.innerText ="Game is Draw.Play Again"
    msg.style.backgroundColor="#081b31";
   
}

const showWinner= (userWin,compChoise,userChoice)=>{
      if(userWin){
        userScore++;
        userScoreCou.innerText=userScore;
        console.log("You win!");
         msg.innerText =`You win! Your ${userChoice} beats ${compChoise}`
         msg.style.backgroundColor="green";
      }else{
        compScore++;
        compScoreCou.innerText=compScore;
        console.log("you lose!");
        msg.innerText =`You Lose. ${compChoise} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
      }
}


 
 