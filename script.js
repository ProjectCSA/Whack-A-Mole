const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timerDisplay = document.querySelector('.time-elapsed');
const livesdoc = document.querySelector('.life-count');
const gameover = document.querySelector('.game-over');
let lastHole;
let gameInProgress = false;
let score = 0;
let startTime;
let lives = 3;
let missed = false;
let finalscore;
let activeMole = null;
let username;

    class UserData {
      constructor  (username, score)
      {
        this.username = username;
        this.score = score;
      }
    }
  
  
    function randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  
    function randomHole(holes) {
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if (hole === lastHole) {
        return randomHole(holes);
      }
      lastHole = hole;
      return hole;
    }
  
    function peep() {
      if (activeMole) {
        activeMole.classList.remove('up');
      }
      missed = true;
      const time = randomTime(1000, 2000);
      const hole = randomHole(holes);
      hole.classList.add('up');
      activeMole = hole;

      const timer = setTimeout(() => {
        hole.classList.remove('up');
        if (gameInProgress && missed) {
          handleMiss();
        } else {
          clearTimeout(timer);
        }
      }, time);

      hole.addEventListener('click', () => {
        missed = false;
        clearTimeout(timer);
      });    
    }
  
    function handleMiss() {
      lives--;
      livesdoc.textContent = lives;
      if (lives === 0) {
        endGame();
      }
    }
  
    function startGame() {
      username = usernameInput.value;
      console.log(username);

      if (gameInProgress) return; // Prevent starting a new game during an existing game
      scoreBoard.textContent = 0;
      lives = 3;
      score = 0;
      gameInProgress = true;
      startTime = Date.now();
      livesdoc.textContent = lives;
      peep();
      updateTimerDisplay();
      peepInterval = setInterval(peep, 2000); // Call peep() every 2 seconds
    }

    const userarray = [];

    function endGame() {
      gameInProgress = false;
      finalscore = score;
      gameover.textContent = "Game Over";
      const getdata = new UserData(username, finalscore);
      userarray.push(getdata);
      console.log(userarray);  
    }
  
    function updateTimerDisplay() {
      if (!gameInProgress) return;
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timerDisplay.textContent = `${elapsedTime}`;
      requestAnimationFrame(updateTimerDisplay);
    }
  
    function whack(e) {
      if (!e.isTrusted || !gameInProgress) {
        scorelast = score;
        return;
      }
      score++;
      this.parentNode.classList.remove('up');
      scoreBoard.textContent = score;
    }
  
    moles.forEach(mole => mole.addEventListener('click', whack));
  
    // Add an event listener to start the game when the "Start!" button is clicked
    // document.querySelector('.start button').addEventListener('click', startGame);
