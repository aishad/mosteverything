var body = document.getElementById("body");
var app = document.getElementById("app");
var startButton = document.querySelector("button");
var playButton = document.createElement('button');
var restartButton = document.createElement("button");
var won = false;
var loss = false;
var x = document.body.clientWidth;
var y = document.body.clientHeight;
var randomTime = Math.random() * (3000 - 1000) + 1000;


startButton.addEventListener('click', () => { startButton.remove(); setTimeout(startGame, randomTime) });

function startGame() {
    app.innerText = "LETS GET THIS PARTY STARTED!";
    body.appendChild(playButton);
    playButton.innerText = "Try to catch me!";
    playButton.style.top = Math.random() * x + "px";
    playButton.style.left = Math.random() * x + "px";
    playButton.style.position = "absolute";
    playButton.addEventListener('click', checkWin);
    setTimeout(checkLoss, 1500);

}
function checkWin() {
    if (loss) return
    won = true;
    app.innerText = "You did it girl";
    restart();
}

function checkLoss() {
    if (won) return
    loss = true;
    app.innerText = "Better luck next time loser"
    restart();

}

function restart() {
    body.appendChild(restartButton);
    restartButton.innerText = "Wanna try again?"
    restartButton.addEventListener('click', () => location.reload());
}