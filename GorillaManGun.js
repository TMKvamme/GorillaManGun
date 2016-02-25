//ask for user choice
var userChoice = prompt("Choose: Gorilla, Man, or Gun");

//make random number for computer choice
var randomNumber = Math.floor( (Math.random() * 3) +1);

// turn random number into an gorilla man or Gun
var compChoice = null
switch (randomNumber) {
  case 1:
    compChoice = "Gorilla"
    break;
  case 2:
    compChoice = "Man"
    break;
  case 3:
    compChoice = "Gun"
    break;
  default:
}
//display choices
console.log("You chose " + userChoice);
console.log("Computer chose " + compChoice);
//find ties
if (userChoice === compChoice) {
console.log("You tie.")
}

//compare user and comp choices
switch (userChoice) {
  case "Gorilla":
  switch (compChoice) {
    case "Man":
      console.log("You Win!");
      break;
    case "Gun":
      console.log("Computer Wins!");
      break;
    default:
  }    
    break;
  case "Man":
  switch (compChoice) {
    case "Gorilla":
      console.log("Computer Wins!");
      break;
    case "Gun":
      console.log("You Win!");
      break;
    default:
  }    
    break;
  case "Gun":
  switch (compChoice) {
    case "Gorilla":
      console.log("You Win!");
      break;
    case "Man":
      console.log("Computer Wins!");
      break;
    default:
  }    
    break;
  default:
}


