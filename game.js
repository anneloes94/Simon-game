
let gamePattern = []
let userClickedPattern = []

let level = 0
let started = false

const buttonColours = ["red", "blue", "green", "yellow"]

$(document).keydown(function() {
  if (!started) {
    $("#level-title").html(`Level ${level}`)
    nextSequence()
    started = true
  }
})


$('.btn').click(function() {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour)
  // console.log(userClickedPattern)
  playSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000)
    }
  } else {
    playSound("wrong")
    $("body").addClass("game-over")

    setTimeout(function(){
      $("body").removeClass("game-over")
    }, 200)
    $("#level-title").html(`Game Over, Press Any Key to Restart`)
    
    startOver()
  }
}

function nextSequence() {
  userClickedPattern = []

  level++
  $("#level-title").html(`Level ${level}`)

  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  
 $(`#${randomChosenColour}`).animate({opacity: 0.5}).animate({opacity: 1})

 playSound(randomChosenColour)  
}

function startOver() {
  level = 0
  gamePattern = []
  started = false
}

function playSound(name) {
  let colourSoundEffect = new Audio(`sounds/${name}.mp3`)
  colourSoundEffect.play()
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed")
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed")
  }, 100)
}
