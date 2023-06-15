const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SICCSOR = "SICCSOR";
const def = "ROCK";

const getvalue =  () => {
  const select = prompt(`${ROCK}, ${PAPER} ,${SICCSOR}`, "").toUpperCase();
  if (select !== ROCK && select !== PAPER && select !== SICCSOR) {
    alert(`the input is not valid so ${def}`);
    return def;
  }
  return select;
};
const computerchoice =  () => {
  const random = Math.random();
  if (random < 0.3) {
    return ROCK;
  } else if (random < 0.6) {
    return PAPER;
  } else {
    return SICCSOR;
  }
};
const  statuses=(getvalue, computerchoice) => {
  if (
    (getvalue === ROCK && computerchoice === PAPER) ||
    (getvalue === SICCSOR && computerchoice === ROCK) ||
    (getvalue === PAPER && computerchoice === ROCK)
  ) {
   return alert("you computer won");
  } else if (
    (getvalue === ROCK && computerchoice === SICCSOR) ||
    (getvalue === SICCSOR && computerchoice === PAPER) ||
    (getvalue === SICCSOR && computerchoice === PAPER)
  ) {
    return alert("you won");
  } 
  else if (getvalue === computerchoice) {
    return alert("draw");
  }
}
startGameBtn.addEventListener("click",  () => {
  console.log("the game has strated....");
  const playervalue = getvalue();
  const computervalue = computerchoice();
  const output=statuses(playervalue, computervalue);
  console.log("userinput" + playervalue);
  console.log("computerinput" + computervalue);
});


//for understanding purpose


// const noveen =(...number)=>{
//   const rahul =(a)=>{
//     return isNaN(a)?1111:a;
//   }
//   let sum=0;
//   for(const num of number){
//     sum +=rahul(num);
//   }
//   return sum;
// }

// console.log(noveen(41,23,56,"nove",59,23,88,102))