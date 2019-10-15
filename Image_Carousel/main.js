const slideContainer = document.querySelector('.slideContainer');
const indicator = document.querySelector('.indicator');
let slideIndex = 0;
let timer;
const myImages = [
  {
    'img': 'https://via.placeholder.com/250/0000FF/FFFFFF?text=image1',
    'caption': 'This is image 1'
  }, {
    'img': 'https://via.placeholder.com/250/FF0000/FFFFFF?text=image2',
    'caption': 'This is image 2'
  }, {
    'img': 'https://via.placeholder.com/250/008000/FFFFFF?text=image3',
    'caption': 'This is image 3'
  }
];

builder();

function builder() {
  for (let i = 0; i < myImages.length; i++) {
    let slide = document.createElement('div');
    slide.setAttribute('class', 'mySlide fade');
    let img = document.createElement('img');
    img.setAttribute('src', myImages[i].img);
    let cap = document.createElement('div');
    cap.classList.add('caption');
    cap.innerText = myImages[i].caption;
    slide.appendChild(img);
    slide.appendChild(cap);
    slideContainer.appendChild(slide);
    let span = document.createElement('span');
    span.classList.add('dot');
    console.log(img);
    span.addEventListener('click', function() {
      moveSlide(i);
    })
    indicator.appendChild(span);

  }
  playSlides();
}
  function moveSlide(num) {
    console.log(num);
  }

  function playSlides() {
      const slides = document.querySelectorAll(".mySlide");
      const dots = document.querySelectorAll(".dot");
      const active = document.querySelector(".active");
      if (active != null) {
          active.classList.remove("active");
      }
      if (slideIndex + 1 > slides.length) {
          slideIndex = 0;
      }
      slides.forEach(function (el) {
          el.style.display = "none";
      })
      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");
      slideIndex++;
      timer = setTimeout(playSlides, 5000);
  }

  function moveSlide(num) {
      slideIndex = num;
      clearTimeout(timer);
      playSlides();
  }
