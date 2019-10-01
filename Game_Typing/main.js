const sentence = ['This is first sentence', 'This one is second', 'This is theerd'];
const message = document.querySelector('.message');
const playText = document.querySelector('textarea');
const btn = document.querySelector('button');
let startTime, endTime;

btn.addEventListener('click', function () {

    if (this.innerText == 'Start') {
        playText.disabled = false;
        playGame();
    } else if (this.innerText == 'Done') {
        playText.disabled = true;
        btn.innerText = 'Start';
        endGame();
    }

    function playGame() {
        let randomValue = Math.floor(Math.random() * sentence.length);
        console.log(randomValue);
        message.innerHTML = sentence[randomValue];
        let date = new Date();
        startTime = date.getTime();
        console.log(startTime);
        btn.innerHTML = 'Done';

    }

    function endGame() {
        let date = new Date();
        endTime = date.getTime();
        let total = ((endTime - startTime) / 1000);
        console.log(total);
        let str = playText.value;
        console.log(str);
        
    }


});