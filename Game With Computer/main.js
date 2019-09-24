const message = document.querySelector('.message');
const result = document.querySelector('.result');
const btns = document.querySelectorAll('button');
const container = document.querySelector('.container');
const EndMessage = document.querySelector('.EndMessage');
const EndResult = document.querySelector('.EndResult');
const array = ['Head', 'Tail'];
const status = ['Player Won Game','Computer Won Game'];
const winner = document.querySelector('.Winner');
var preco

let finalScore = document.querySelector('.finalScore');
let score = [0, 0];
let output = 'hello';

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', game);
  console.log(btns[i]);
}

function game(button) {
  //Player
  let playerGuess = button.target.innerText;
  let newH1 = document.createElement('h1');
  console.log(playerGuess);

  //Computer
  let compNum = Math.floor(Math.random() * array.length);
  let compGuess = array[compNum];
  console.log(compGuess);

  if (compGuess === playerGuess) {
    score[0]++;
    output = 'Players Won This Turn';
    result.style.color = 'green';
  } else {
    score[1]++;
    output = 'Computer Won This Turn';
    result.style.color = 'red';
  }

  if (score[0] == 3) {
    console.log('End Game');
    container.classList.add('endGame');
    EndMessage.classList.add('EndMessageDisplay');
    EndResult.innerHTML = `<br> Player Score: ${score[0]} | Computer Score: ${score[1]}`;
    winner.textContent = status[0];

  } else if (score[1] == 3) {
    console.log('End Game');
    container.classList.add('endGame');
    EndMessage.classList.add('EndMessageDisplay');
    EndResult.innerHTML = `<br> Player Score: ${score[0]} | Computer Score: ${score[1]}`;
    winner.textContent = status[1];

  }

  message.classList.add('messageVisible');
  result.classList.add('resultVisible');
  finalScore.classList.add('finalScoreVisible');

  message.innerHTML = `Computer Guess: ${compGuess}`;
  result.innerHTML = output;
  finalScore.innerHTML = `Player Score: ${score[0]} | Computer Score: ${score[1]}`;
}
