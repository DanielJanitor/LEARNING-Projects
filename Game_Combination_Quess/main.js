const gameAre = document.querySelector('.game');
const btn = document.querySelector('button');
let gamePlay = false;
btn.addEventListener('click', ()=>{
    console.log(gamePlay);
    
    if (gamePlay === false) {
        gamePlay = true;
        btn.innerHTML = 'Check Combo';
        maker();
    }else{
        console.log('Check');
        
    }
})

function maker(){
   for (let x = 0; x < 4; x++) {
    
    
    let el = document.createElement('input');
    el.setAttribute('type','number');
    el.max = 9;
    el.min = 0;
    el.order = x;
    el.size = 1;
    el.value = 0;
    el.correct = Math.random();
    el.classList.add('numb');
    el.style.width = '40px';
    gameAre.appendChild(el);
    };
};
