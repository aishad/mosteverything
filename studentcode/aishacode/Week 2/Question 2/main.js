var body = document.getElementById("main");
var main = document.getElementById("app")
var won = false;
var loss = false;


function potentialWin() {
    if (loss) return;
    won = true;
    main.innerText = "You Won";

}
function potentialLoss() {
    if (won === true) return;
    loss = true;
    main.innerText = "YOU LOST!";

}

function playGame() {

    main.innerText = "It's Beginning!";

    body.addEventListener('click', x => {
        potentialWin();

    })

    body.addEventListener('keypress', x => {
        if (x.keyCode == 32) {
            potentialWin();
        }
    })
    setTimeout(potentialLoss, 500);

} 

 setTimeout(playGame, Math.random() * (3000 - 1000) + 1000);

