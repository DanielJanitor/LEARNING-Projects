const btn = document.querySelector('button');
const output = document.querySelector('#output');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

btn.addEventListener('click', () => {
 
});

function roll(num) {
    let randoms = Math.floor(Math.random() * num) + 1;
    return randoms;
}