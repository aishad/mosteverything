var main = document.getElementById('app');
var body = document.getElementById('main');
var won=false;


body.addEventListener('click', () =>

{  main.innerText="You Won";
    won=true;
})

function checkWon(){
     if (!won) {main.innerText="You Lost";
}

setTimeout(checkWon,1000);
