var body = document.getElementById("body");
var app = document.getElementById("app");
let intro = document.getElementById("intro");
let winner = document.getElementById("winner");
let loser = document.getElementById("loser");
var randomTime = (Math.floor(Math.random() * (8 - 2)) + 2) * 1000;
var audio = document.getElementById('audio');
var restartButton = document.createElement("button");
var player1Winner = false;
var player2Winner = false;
var gameStarted = false;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");




body.addEventListener('keypress', checkWinner);

setTimeout(() => {
    audio.play();
    intro.innerText = "Battle begins now!\nPlayer 1: Press P\nPlayer 2: Press 2";
    playGame();
    gameStarted = true;
}, randomTime);

function playGame() {
    gameStarted = true;
    
    player1.style.display="block";
    player2.style.display="block";
}

function checkWinner(x){
    body.removeEventListener('keypress', checkWinner )
    if (!gameStarted && x.keyCode == 112) {
        player1Winner = false;
        player2Winner=false;
     //   loser.innerText = "player 1 lost";
        player1.style.display="block";
        player1.style.backgroundImage="url('player1Lost.gif')";

    }

    else if (!gameStarted && x.keyCode == 113) {
        player2Winner = false;
        player1Winner=false;
        player2.style.display="block";
        //loser.innerText = "player 2 lost";
        player2.style.backgroundImage="url('player2Loser.gif')";

    }
    else if (gameStarted && x.keyCode == 112 && player2Winner === false) {
        player1Winner = true;
        player2Winner = false;
       // winner.innerText = "Player 1 Won!";
        player1.style.backgroundImage="url('player1Winner.gif')";


    }

    else if (gameStarted && x.keyCode == 113 && player1Winner === false) {
        player1Winner = false;
        player2Winner = true;
     //   winner.innerText = "Player 2 Won!";        
     player2.style.backgroundImage="url('player2Winner.gif')";

    }
    restart();
}
    function restart() {
        body.appendChild(restartButton);
        restartButton.innerText = "Play Again?";
        restartButton.addEventListener('click', () => location.reload());
    }