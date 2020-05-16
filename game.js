// 0. Set game variables
let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

const buttonColours = ["red", "blue", "green", "yellow"];

// 1. If a key is pressed and the game hasn't started yet, start the game
$(document).keydown(function () {
  if (!started) {
    $("#level-title").html(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

/*
2. Once a coloured button is clicked:
 - add the colour to userClickedPattern 
 - do effects
 - invoke checkAnswer()
*/

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

/*
3. Check whether last entry in userClickedPattern and gamePattern match, and whether their lengths match
  - if yes: invoke nextSequence
  - if no: do gameOver effects, invoke startOver()
*/
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html(`Game Over, Press Any Key to Restart`);

    startOver();
  }
}

/*
4. For next sequence, get a random colour, play effects and add it to gamePattern
*/
function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").html(`Level ${level}`);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).animate({ opacity: 0.5 }).animate({ opacity: 1 });

  playSound(randomChosenColour);
}

/*
5. reset game variables
*/

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// Sound and animation effects
function playSound(name) {
  let colourSoundEffect = new Audio(`sounds/${name}.mp3`);
  colourSoundEffect.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");

  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}
