
let gamePattern = []
let userClickedPattern = []

const buttonColours = ["red", "blue", "green", "yellow"]

/*
  3. USER SELECTS COLOURS
  the users selects a colour, which gets added to the userClickedPattern array
*/


$('.btn').click(function() {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour)
  // console.log(userClickedPattern)
  playSound(userChosenColour)
  animatePress(userChosenColour)
})

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed")
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed")
  }, 100)
}

function nextSequence() {
  /* 
    1. CREATE ARRAY
    Each turn, a colour is picked through selecting a random number (0 - 3)
    This colour is then added to the gamePattern array
  */
  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  
  /* 
    2. CREATE EFFECT
    the button creates an animate ffect and plays a sound after click
  */
  $(`#${randomChosenColour}`).animate({opacity: 0.5}).animate({opacity: 1})
  
  playSound(randomChosenColour)
  


  
}

function playSound(name) {
  let colourSoundEffect = new Audio(`sounds/${name}.mp3`)
  colourSoundEffect.play()
}




