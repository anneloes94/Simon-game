
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

function nextSequence() {
  level++

  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  
 $(`#${randomChosenColour}`).animate({opacity: 0.5}).animate({opacity: 1})

 playSound(randomChosenColour)  
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log(`${userClickedPattern[currentLevel]} - ${gamePattern[currentLevel]}`)
    console.log("right")
  } else {
    console.log("wrong")
  }
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
