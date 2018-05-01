
var body = document.getElementById("body");
var app = document.getElementById("app");
var startButton = document.querySelector("button");
var restartButton = document.createElement("button");
var won = false;
var loss = false;
var x = document.body.clientWidth;
var y = document.body.clientHeight;
var randomTime = Math.random() * (3000 - 1000) + 1000;
var button = [];
var count = 0;

startButton.addEventListener('click', () => { startButton.remove(); setTimeout(startGame, randomTime) });

function startGame() {
    app.innerText = "The game has begun";
    createButton();
}
function createButton() {
    for (let i = 1; i <= 5; i++) {
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
            if (count == 5) checkWin();
        });
        setTimeout(checkLoss, 3000);
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


