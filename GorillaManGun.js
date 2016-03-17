//beginning of game function which will loop
var game = function(){

//ask for user choice
var userChoice = prompt("Choose: Gorilla, Man, or Gun");
while ((userChoice !== "Gorilla") && (userChoice !== "Gun") && (userChoice !== "Man")){
    userChoice = prompt("Not one of our choices. \nChoose: Gorilla, Man, or Gun");
}


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
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "TIE GAME!");
}

//compare user and comp choices
switch (userChoice) {
  case "Gorilla":
  switch (compChoice) {
    case "Man":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU WIN!");
      break;
    case "Gun":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU LOSE!");
      break;
    default:
  }
    break;
  case "Man":
  switch (compChoice) {
    case "Gorilla":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU LOSE!");
      break;
    case "Gun":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU WIN!");
      break;
    default:
  }
    break;
  case "Gun":
  switch (compChoice) {
    case "Gorilla":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU WIN!");
      break;
    case "Man":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU LOSE!");
      break;
    default:
  }
    break;
  default:
}
//asks to play again, if no loop ends
playAgain = confirm("Do you want to play again");
}
//end of game function


//starting questions
var playAgain = confirm("Would you like to play Gorilla, Man, Gun?");

//while loop
while (playAgain) {
    game();
}
alert("Thanks for playing!")
