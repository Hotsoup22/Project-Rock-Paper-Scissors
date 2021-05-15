var playerChoice = prompt("Which do you choose? R, P, S");

if (playerChoice.toLowerCase == "r") {
    var playerChoice = "0";
} else if (playerChoice.toLowerCase ==)

var playerChoice = [ "0" , "1", "2"];
var computerChoice = ["0", "1" , "2"]; 

var computerChoice = Math.floor(Math.random() * computerChoice.length);

function PlayGame {


if (playerChoice == computerChoice) {
    console.log("You have tied against the computer");
} else if (playerChoice == 1 && computerChoice == 0) {
    console.log("You have chosen paper.");
    console.log("The computer has chosen rock.");
    console.log("You have won against the computer");
} else if (playerChoice == 2 && computerChoice ==1) {
    console.log("You have chosen scissors.");
    console.log("The computer has chosen paper");
    console.log("You have won against ther computer");
} else if (playerChoice == 0 && computerChoice == 2) {
    console.log("You have chosen rock.");
    console.log("The computer has chosen scissors");
    console.log("You have won against the computer");
} else {
    console.log("you have lost against the computer");
}

return;

}