

let playerScore = 0

let playerName = prompt ('Please Enter your Name ')
console.log ('Hi ' + playerName)


for (i=0; i>=100000000000; i++){
  
  let Roll = Math.floor(Math.random() * 6) + 1
  
  let Prediction = prompt ('Please enter your guess ')
  parseInt(Prediction)
  parseInt(Roll)
  
  if (Prediction == Roll){
  console.log('You Win!')
  playerScore = playerScore + 10
}
  
  else {
    console.log ('You Lose!')
    playerScore = playerScore - 2
  }

  console.log(Prediction, Roll)
  console.log(playerName, 'your score is ', playerScore)
  
}
