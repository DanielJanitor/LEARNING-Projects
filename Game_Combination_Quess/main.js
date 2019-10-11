const gameAre = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');
let playGame = false;
let score = 0;
button.addEventListener('click', function () {
    if (!playGame) {
        playGame = true;
        score = 0;
        gameAre.innerHTML = '';
        maker(6);
        button.innerHTML = 'Check Combo';
        message.innerHTML = 'Guess the combo';
    } else {
        let winContition = 0;
        score++;
        message.innerHTML = 'Guesses ' + score;
        const numbers = document.querySelectorAll('.numb');
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].correct == numbers[i].value) {
                numbers[i].style.backgroundColor = 'green';
                numbers[i].style.color = 'white';
                winContition++;
            } else {
                let color = (numbers[i].value < numbers[i].correct) ? 'blue' : 'red';
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = 'black';
            }
            if (winContition == numbers.length) {
                gameEnd();
            }
        }
    }
})

function gameEnd() {
    message.innerHTML = 'You solved combo in ' + score + ' gueses.';
    playGame = false;
    score = 0;
    button.innerHTML = 'Restart';
}

function maker(num) {
    for (let i = 0; i < num; i++) {
        let el = document.createElement('input');
        gameAre.appendChild(el);
        el.setAttribute('type', 'number');
        el.classList.add('numb');
        el.max = 9;
        el.min = 0;
        el.order = i;
        el.size = 1;
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.style.width = '50px';
    }
}