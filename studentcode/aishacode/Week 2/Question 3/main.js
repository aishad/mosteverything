var body = document.getElementById("body");
var app = document.getElementById("app");
var x = document.body.clientHeight;
var y = document.body.clientWidth;
var won = false;
var loss = false;


function checkLoss() {
    if (won === true) return
    loss = true
    app.innerText = "you lost";
}

function checkWin() {
    if (loss) return
    won = true;
    app.innerText = "you won";
}

function playGame() {
    var button = document.createElement('button');
    body.appendChild(button);
    button.innerText = "Let's Start >> Click Me";
    button.style.top = Math.random() * x + "px";
    button.style.left = Math.random() * y + "px";
    button.style.position = "absolute";
    button.addEventListener('click', checkWin)

    setTimeout(checkLoss, 1500)
    
}    

setTimeout(playGame, Math.random() * (3000 - 1000) + 1000);


