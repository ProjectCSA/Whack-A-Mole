// Function to generate a random time interval
function getRandomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Function to select a random hole
function getRandomHole(holes) {
  const randomIndex = Math.floor(Math.random() * holes.length);
  const randomHole = holes[randomIndex];

  if (randomHole === lastHole) {
    return getRandomHole(holes);
  }

  lastHole = randomHole;
  return randomHole;
}

// Function to make a mole appear
function popMole() {
  const timeInterval = getRandomTime(200, 1000);
  const hole = getRandomHole(holeElements);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!isTimeUp) {
      popMole();
    }
  }, timeInterval);
}

// Function to handle whacking a mole
function whackMole(event) {
  if (!event.isTrusted) return; // Ensure that the click event is trusted

  playerScore++;
  this.parentNode.classList.remove('up');
  scoreDisplay.textContent = playerScore;
}

// Variable declarations
const holeElements = document.querySelectorAll('.hole');
const scoreDisplay = document.querySelector('.game-score');
const moleElements = document.querySelectorAll('.mole-character');
let lastHole;
let isTimeUp = false;
let playerScore = 0;

// Function to start the game
function startGame() {
  playerScore = 0;
  scoreDisplay.textContent = playerScore;
  isTimeUp = false;
  popMole();

  // Set the game duration (e.g., 10 seconds)
  setTimeout(() => {
    isTimeUp = true;
    alert('Game Over! Your score: ' + playerScore);
  }, 10000);
}

// Add click event listeners to mole elements
moleElements.forEach(mole => mole.addEventListener('click', whackMole));

// Start the game when desired
// startGame();
