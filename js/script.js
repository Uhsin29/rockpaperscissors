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
  if (computerNumber === "2") {$(".computerChoice").text("Paper")}
  else if (computerNumber === "3") {$(".computerChoice").text("Rock")}
  else {$(".computerChoice").text("Rock")}
  });

$(".paper").click(function() {
  $(".userChoice").text("You chose PAPER");
  let computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  $(".computerChoice").text(computerNumber);
});

$(".scissors").click(function() {
  $(".userChoice").text("You chose SCISSORS");
  let computerNumber = Math.random() * 3;
  computerNumber = Math.ceil(computerNumber);
  $(".computerChoice").text(computerNumber);
});