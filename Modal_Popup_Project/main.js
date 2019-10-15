const btn = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modalWrapper');
const closeBtn = document.querySelector('.close');
const body = document.querySelector('body');

btn.addEventListener('click', () => modalWrapper.classList.add('showModal'));
closeBtn.addEventListener('click', () => modalWrapper.classList.remove('showModal'));
body.addEventListener('keydown', e => {
  if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode == 27) {
    modalWrapper.classList.remove('showModal');
  }
});

// const btn = document.querySelectorAll('.modal');
// const modalWrapper = document.querySelector('.modalWrapper');
//
//
//
// btn.forEach(function(button){
//   makeClick(button);
// })
//
// function makeClick(el){
//   el.addEventListener('click', function(){
//     modalWrapper.classList.add('showModal');
//     const closeBtn = document.querySelector('.close');
//     closeBtn.addEventListener('click', function(){
//     modalWrapper.classList.remove('showModal');
//     })
//   })
// }
