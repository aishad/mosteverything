
var body = document.getElementById("body");
var app = document.getElementById("app");
var intro = document.getElementById("intro");
var startButton = document.querySelector("button");
var restartButton = document.createElement("button");
var won = false;
var loss = false;
var x = document.body.clientWidth;
var y = document.body.clientHeight;
var randomTime = Math.random() * (3000 - 1000) + 1000;
var button = [];
var count = 0;
let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let randomTime2 = (1 + randomNumber * 0.4)*1000;


startButton.addEventListener('click', () => { startButton.remove(); setTimeout(startGame, randomTime) });

function startGame() {
    intro.innerText = "The game has begun";
    createButton();
}
function createButton() {
    for (let i = 1; i <= randomNumber; i++) {
        button[i] = document.createElement("button");
        body.appendChild(button[i]);
        button[i].style.top = Math.random() * x + "px";
        button[i].style.left = Math.random() * x + "px";
        button[i].style.position = "absolute";
        button[i].innerText = "Button " +i;
        body.addEventListener('click', checkLoss);
        button[i].addEventListener('click',  event=> {
            event.stopPropagation();
            button[i].style.display="none";
            count++;
            if (count == randomNumber) checkWin();
        });
        setTimeout(checkLoss, randomTime2);
    }
}
  
    function checkWin() {
        if (loss) return
        won = true;
        app.innerText = "YOU WON"
        restart();
    }

function checkLoss() {
    if (won) return
    loss = true;
    app.innerText = "YOU LOST"
    restart();
}

function restart() {
    body.appendChild(restartButton);
    restartButton.innerText = "Play Again?";
    restartButton.addEventListener('click', () => location.reload());
}


