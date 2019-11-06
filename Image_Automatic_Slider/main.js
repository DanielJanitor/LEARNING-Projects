const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  //Get current class
  const current = document.querySelector('.current');
  //Remove current slide
  current.classList.remove('current');
  //check for next slide
  if (current.nextElementSibling) {
    //Add current to next sibling
    current.nextElementSibling.classList.add('current')
  } else {
    //Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  //Get current class
  const current = document.querySelector('.current');
  //Remove current slide
  current.classList.remove('current');
  //check for previous slide
  if (current.previousElementSibling) {
    //Add current to previous sibling
    current.previousElementSibling.classList.add('current')
  } else {
    //Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

//Button event

nextBtn.addEventListener('click', function(){
  nextSlide();
  //Auto Slider
  if (auto) {
    clearInterval(slideInterval);
    //run next slide at interval timeout
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

prevBtn.addEventListener('click', function(){
  prevSlide();
  //Auto Slider
  if (auto) {
    clearInterval(slideInterval);
    //run next slide at interval timeout
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

//Auto Slider
if (auto) {
  clearInterval(slideInterval);
  //run next slide at interval timeout
  slideInterval = setInterval(nextSlide, intervalTime);
}
