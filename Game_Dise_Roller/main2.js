const btn = document.querySelector('button');
const output = document.querySelector('.output');


btn.addEventListener('click', () => {

});

function roll(num) {
    let randoms = Math.floor(Math.random() * num) + 1;
    return randoms;
}