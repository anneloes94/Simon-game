
let gamePattern = []
const buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
  /* 
    1. CREATE ARRAY
    Each turn, a colour is picked through selecting a random number (0 - 3)
    This colour is then added to the gamePattern array
  */
  let randomNumber = Math.floor(Math.random() * 4)

  let randomChosenColour = buttonColours[randomNumber]
  
  console.log(randomChosenColour)
  
  gamePattern.push(randomChosenColour)
  
  /* 
    2. CREATE EFFECT
    the button creates an animate ffect and plays a sound after click
  */
  
  $(`#${randomChosenColour}`).animate({opacity: 0.5}).animate({opacity: 1})
  
  let colourSoundEffect = new Audio(`${randomChosenColour}.mp3`)
  colourSoundEffect.play()
}

nextSequence()

