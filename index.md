<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Whack A Mole!</title>
  <link href='https://fonts.googleapis.com/css?family=Amatic+SC:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <h1>Whack-a-mole!</h1>
  <div class= "game-over"></div>
  <div class="timer">Time: <span class="time-elapsed">0</span> seconds</div>
  <div class="lives">Lives: <span class="life-count">3</span></div>
  <div class="score"> 0</div>
  <div class = "start">
  <input type="text" id="usernameInput" placeholder="Enter your username">
  
  
  <button onClick="startGame()">Start!</button>
  </div>

  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  <div class="hole hole7">
    <div class="mole"></div>
  </div>
  <div class="hole hole8">
    <div class="mole"></div>
  </div>
  <div class="hole hole9">
    <div class="mole"></div>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>