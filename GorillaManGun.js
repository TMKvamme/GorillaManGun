//this is called by ryans html. this function contains everything
var game = function(){

//set scores to 0
var userScore = 0;
var compScore = 0;
var tieScore = 0;

//beginning of play function which will loop
var play = function(){

//ask for user choice
var userChoice = prompt("Choose: Gorilla, Man, or Gun");

//set user choice to camel case
userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

//if choice doesnt match ask again
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

//find ties
if (userChoice === compChoice) {
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "TIE GAME!");
      tieScore++;
}

//compare user and comp choices
switch (userChoice) {
  case "Gorilla":
  switch (compChoice) {
    case "Man":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU WIN!");
      userScore++;
      break;
    case "Gun":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU LOSE!");
            compScore++;
      break;
    default:
  }
    break;
  case "Man":
  switch (compChoice) {
    case "Gorilla":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU LOSE!");
      compScore++;
      break;
    case "Gun":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU WIN!");
            userScore++;
      break;
    default:
  }
    break;
  case "Gun":
  switch (compChoice) {
    case "Gorilla":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU WIN!");
            userScore++;
      break;
    case "Man":
      alert("You chose " + userChoice + ".\n" + "Computer chose " + compChoice + ".\n\n" + "YOU LOSE!");
      compScore++;
      break;
    default:
  }
    break;
  default:
}

//show scores
alert( "Wins: " + userScore + "\n" + "Loses: " + compScore + "\n" + "Ties: " + tieScore );

//asks to play again, if no loop ends
playAgain = confirm("Do you want to play again");
}
//end of play function

//starting questions
var playAgain = confirm("Would you like to play Gorilla, Man, Gun?");

if (playAgain) {
  while (playAgain) {
    play();
  }
    alert("Thanks for playing!");
}
else {
  alert("You must be too scared to play. See you when you are man enough.");
}

//end of game function
}
