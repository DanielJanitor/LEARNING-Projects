const btn = document.querySelector('button');
const output = document.querySelector('#output');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

btn.addEventListener('click', () => {
    let rolls = [roll(6), roll(6)];
    let temp;

    if (rolls[0] == rolls[1]) {
        temp = 'It was draw';
    } else if (rolls[0] > rolls[1]) {
        temp = 'Player1 Wins';
    } else {
        temp = 'Player2 Wins';
    }
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];
    output.innerHTML = temp;
});

function roll(num) {
    let randoms = Math.floor(Math.random() * num) + 1;
    let n = 9855 + randoms;
    let chart = '&#' + n + ';';
    return chart;
}