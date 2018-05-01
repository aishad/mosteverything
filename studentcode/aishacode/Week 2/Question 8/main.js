var body = document.getElementById("body");
var app = document.getElementById("app");
var randomTime = (Math.floor(Math.random() * (8 - 2)) + 2) * 1000;
var audio = document.getElementById('audio');
var restartButton = document.createElement("button");
var player1Winner = false;
var player2Winner = false;
var gameStarted = false;


body.addEventListener('keypress', checkWinner);

setTimeout(() => {
    audio.play();
    app.innerText = "The game has started!!";
    playGame();
    gameStarted = true;
}, randomTime);

function playGame() {
    gameStarted = true;
}

function checkWinner(x){
    body.removeEventListener('keypress', checkWinner )
    if (!gameStarted && x.keyCode == 112) {
        player1Winner = false;
        player2Winner=false;
        app.innerText = "player 1 lost";
    }

    else if (!gameStarted && x.keyCode == 113) {
        player2Winner = false;
        player1Winner=false;
        app.innerText = "player 2 lost";
    }
    else if (gameStarted && x.keyCode == 112 && player2Winner === false) {
        player1Winner = true;
        player2Winner = false;
        app.innerText = "Player 1 Won!";
    }

    else if (gameStarted && x.keyCode == 113 && player1Winner === false) {
        player1Winner = false;
        player2Winner = true;
        app.innerText = "Player 2 Won!";
    }
    restart();
}
    function restart() {
        body.appendChild(restartButton);
        restartButton.innerText = "Play Again?";
        restartButton.addEventListener('click', () => location.reload());
    }