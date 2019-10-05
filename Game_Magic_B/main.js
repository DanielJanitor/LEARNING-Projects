const message = document.querySelector('.message');
const question = document.querySelector('input');
const btn = document.querySelector('button');
const answerArray = ['it will work', 'Maybe maybe not', 'Higly likely', 'I do not know'];
const answer = document.querySelector('.answer');


btn.addEventListener('click', () => {
    let res = Math.floor(Math.random() * answerArray.length);
    let output = question.value + ', ' + answerArray[res];
    answer.innerHTML = output;
    question.value = '';
})