// document.querySelector("h1").style.color = "green";

// $("h1").css("color", "red");

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;


$(document).keypress(function(){
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})


$(".btn").click(function(){
  // var userChosenColor = $("button").click(id); (Mistake was made). Also we don't need click inside function() there, as there's no need of callback.
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
})

//
// function checkAnswer(currentLevel){
//   if (gamePattern === userClickedPattern) {
//     if (gamePattern.length === userClickedPattern.length) {
//       setTimeout(function() {
//         nextSequence();
//       }, 1000);
//     }
//
//   }
//   else {
//     playSound("wrong");
//
//     $("body").addClass("game-over");
//     $("#level-title").text("Game Over, Press Any Key To Restart.");
//
//     setTimeout(function(){
//       $("body").removeClass("game-over");
//     }, 200);
//
//     startOver();
//   }
// }
//


function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  }
  else {
    playSound("wrong");

    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key To Restart.");

    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}




function nextSequence() {

  userClickedPattern = [];
  level += 1;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function playSound(name) {
  var audio = new Audio('sounds/' + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}




/*
// This is what you shouldn't be doing.

switch (randomChosenColor) {
  case "red":
    var music1 = new Audio('sounds/red.mp3');
    music1.play();
  break;

  case "blue":
    var music2 = new Audio('sounds/blue.mp3');
    music2.play();
  break;

  case "green":
    var music3 = new Audio('sounds/green.mp3');
    music3.play();
  break;

  case "yellow":
    var music4 = new Audio('sounds/yellow.mp3');
    music4.play();
  break;
}
*/
