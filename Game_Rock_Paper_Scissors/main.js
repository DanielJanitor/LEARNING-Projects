const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', game);

}

function game(button) {
    let playerSelection = button.target.innerText;
    console.log(playerSelection);
    let computerSelection = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    } else if (computerSelection < 0.67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissiors';
    }
    console.log(playerSelection,computerSelection);
    let result = checkWinner(playerSelection,computerSelection);
    console.log(result);
    
}

function checkWinner(pl,cp){
    if (pl===cp) {
        return 'Draw';
    }
}