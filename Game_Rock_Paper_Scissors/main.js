const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btns = document.querySelectorAll('button');
let winner = [0, 0];
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
    console.log(playerSelection, computerSelection);
    let result = checkWinner(playerSelection, computerSelection);
    console.log(result);

    if (result == 'Player') {
        result += 'Wins';
        winner[0]++;
    } else if (result == 'Computer') {
        result += 'Wins';
        winner[1]++;
    } else {
        result += 'Result in tie Match'
    }
    score.innerHTML = 'Player[' + winner[0] + '] vs Computer [' + winner[1] + ']';
    messanger(playerSelection + ' vs ' + computerSelection + '<br><b>' + result + '<b>');
}

function messanger(mes) {
    message.innerHTML = mes;
}

function checkWinner(pl, cp) {
    if (pl === cp) {
        return 'Same Chosse! ';
    }


    if (pl === 'Rock') {
        if (cp === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
    if (pl === 'Paper') {
        if (cp === 'Scissiors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
    if (pl === "Scissors") {
        if (cp === "Rock") {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}