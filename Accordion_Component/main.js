const main = document.querySelectorAll('.main');
const content = document.querySelectorAll('.content');


for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', function(){
    console.log(main[i].nextElementSibling);
    clearActive();
    main[i].nextElementSibling.classList.toggle('active')

  })
}



function clearActive(){
  for (let i = 0; i < content.length; i++){
    content[i].classList.remove('active');
  }
}
