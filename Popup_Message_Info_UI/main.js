const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.output');
const popupMessage = document.querySelector('.message');
const closeBtn = document.querySelector('.close');


closeBtn.addEventListener('click', function(){
  popup.classList.add('hide');
})

for (let i = 0; i < popups.length; i++) {
  popups[i].addEventListener('click', function(){
    let outputText = this.getAttribute('data-message');
    message(outputText);
  })
}


function message(output){
  popup.classList.remove('hide');
  popupMessage.innerText = output;
}
