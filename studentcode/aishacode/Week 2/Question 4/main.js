var body = document.getElementById("body");
var app = document.getElementById("app");
var x = document.body.clientHeight;
var y = document.body.clientWidth;
var button = document.querySelector("button");
var won = false;
var loss = false;
var randomTime = Math.random() * (3000 - 1000) + 1000;
var button2 = document.createElement('button');

button.addEventListener('click', () => { button.remove(); setTimeout(startGame, randomTime) });

function startGame() {
    app.innerText = "Let's begin!";
    body.appendChild(button2);
    button2.innerText = "CLICK ME TO WIN";
    button2.style.top = Math.random() * x + "px";
    button2.style.left = Math.random() * y + "px";
    button2.style.position = "absolute";
    button2.addEventListener('click', checkWin)
    setTimeout(checkLoss, 1500)

}

function checkWin() {
    if (loss) return;
    won = true;
    app.innerText = "YOU WON!";
}

function checkLoss() {
    if (won === true) return;
    loss = true
    app.innerText = "YOU LOST!!"
}

