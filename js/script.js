$(".play").click(function() {
  let choice = $(".input").val();
  $(".userChoice").text(`${choice}`);
  let computerNumber;
  computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  $(".computerChoice").text(computerNumber);
});
$(".rock").click(function() {
  $(".userChoice").text("You chose ROCK");
  let computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  $(".computerChoice").text(computerNumber);
  if (computerNumber === 1) {$(".computerChoice").text("Rock")}
  else if (computerNumber === 2) {$(".computerChoice").text("Paper")}
  else {$(".computerChoice").text("Scissors")}
  chooseWinner (1 , computerNumber);
  });

$(".paper").click(function() {
  $(".userChoice").text("You chose PAPER");
  let computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  $(".computerChoice").text(computerNumber);
   if (computerNumber === 1) {$(".computerChoice").text("Rock")}
  else if (computerNumber === 2) {$(".computerChoice").text("Paper")}
  else {$(".computerChoice").text("Scissors")}
  chooseWinner (2 , computerNumber);
});

$(".scissors").click(function() {
  $(".userChoice").text("You chose SCISSORS");
  let computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  $(".computerChoice").text(computerNumber);
   if (computerNumber === 1) {$(".computerChoice").text("Rock")}
  else if (computerNumber === 2) {$(".computerChoice").text("Paper")}
  else {$(".computerChoice").text("Scissors")}
  chooseWinner (3 , computerNumber);
});
function chooseWinner (userChoice , computerChoice){
  if (userChoice === computerChoice) {$(".result").text("That is a tie??")}
  else if (userChoice === 1 && computerChoice === 2) {$(".result").text("Paper beats Rock, You lose")}
  else if (userChoice === 1 && computerChoice === 3) {$(".result").text("Rock beats Scissors, You Win!")}
  else if (userChoice === 2 && computerChoice === 1) {$(".result").text("Paper beats Rock, You Win!")}
  else if (userChoice === 2 && computerChoice === 3) {$(".result").text("Scissors beat Paper, You lose")}
  else if (userChoice === 3 && computerChoice === 1) {$(".result").text("Rock beats Scissors, You lose")}
  else if (userChoice === 3 && computerChoice === 2) {$(".result").text("Scissors beat Paper, You Win!")}
}