var score = 0
var scissors  = "scissors"
var stone = "stone"
var paper = "paper"
var main = function (input) {
var computerChoice = getObjectforComputer ()
var outcome = winCondition (input, computerChoice) 
return outcome
}
 
var winCondition = function(input, computerChoice){
console.log(computerChoice)
  if(input == computerChoice) {return "draw"};
  console.log("success one")
  if(input == scissors && computerChoice == paper || input == stone && computerChoice == scissors ||input == paper && computerChoice == stone ) {
    score+=1
    return "win"
    };
  console.log("success two")
  if(input == scissors && computerChoice == stone || input == stone && computerChoice == paper ||input == paper && computerChoice == scissors) {
    score-0=1
    return "lose"
    };
  return "Input not valid. Please enter either Scissors, Paper, or Stone"
}
var getObjectforComputer = function(){
  var number = Math.floor(Math.random() * 2);
  console.log("success one")
  if (number == 0){
    return scissors;
  };
  console.log("a")
  if (number == 1){
    return paper;
  };
  console.log("b")
  if (number == 2){
    return stone
  };
} 
