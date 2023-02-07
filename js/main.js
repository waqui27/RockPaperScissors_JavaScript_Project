const userscore = document.querySelector("#userScoreVal")
const compscore = document.querySelector("#compScoreVal")
const userstatus = document.querySelector("#result-user-stat")
const compstatus = document.querySelector("#result-comp-stat")
const finalstatus = document.querySelector("#result-final-stat")
const rock = document.querySelector("#r")
const paper = document.querySelector("#p")
const scissors = document.querySelector("#s")

const option = ["Rock", "Paper", "Scissors"]

let userScoreValue = 0;
let compScoreValue = 0;

rock.addEventListener("click", () => {
  computersChoice = option[Math.floor(Math.random() * option.length)]
  if(computersChoice === option[0]) {
    finalstatus.innerText = "Winner: Match Tie"
    compstatus.innerText = "Computer: Rock"
    userstatus.innerText = "User: Rock"
  } else if(computersChoice === option[1]) {
    finalstatus.innerText = "Winner: Computer"
    compstatus.innerText = "Computer: Paper"
    userstatus.innerText = "User: Rock"
    compScoreValue += 1
    compscore.innerText = compScoreValue
  } else if(computersChoice === option[2]) {
    finalstatus.innerText = "Winner: You"
    compstatus.innerText = "Computer: Scissors"
    userstatus.innerText = "User: Rock"
    userScoreValue += 1
    userscore.innerText = userScoreValue
  }
})

paper.addEventListener("click", () => {
  computersChoice = option[Math.floor(Math.random() * option.length)]
  if(computersChoice === option[1]) {
    finalstatus.innerText = "Winner: Match Tie"
    compstatus.innerText = "Computer: Paper"
    userstatus.innerText = "User: Paper"
  } else if(computersChoice === option[2]) {
    finalstatus.innerText = "Winner: Computer"
    compstatus.innerText = "Computer: Scissors"
    userstatus.innerText = "User: Paper"
    compScoreValue += 1
    compscore.innerText = compScoreValue
  } else if(computersChoice === option[0]) {
    finalstatus.innerText = "Winner: You"
    compstatus.innerText = "Computer: Rock"
    userstatus.innerText = "User: Paper"
    userScoreValue += 1
    userscore.innerText = userScoreValue
  }
})

scissors.addEventListener("click", () => {
  computersChoice = option[Math.floor(Math.random() * option.length)]
  if(computersChoice === option[2]) {
    finalstatus.innerText = "Winner: Match Tie"
    compstatus.innerText = "Computer: Scissors"
    userstatus.innerText = "User: Scissors"
  } else if(computersChoice === option[0]) {
    finalstatus.innerText = "Winner: Computer"
    compstatus.innerText = "Computer: Rock"
    userstatus.innerText = "User: Scissors"
    compScoreValue += 1
    compscore.innerText = compScoreValue
  } else if(computersChoice === option[1]) {
    finalstatus.innerText = "Winner: You"
    compstatus.innerText = "Computer: Paper"
    userstatus.innerText = "User: Scissors"
    userScoreValue += 1
    userscore.innerText = userScoreValue
  }
})




