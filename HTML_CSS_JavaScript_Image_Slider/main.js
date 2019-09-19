// Variables
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const imagesContainer = document.querySelector('.images');
const imageHeader = document.querySelector('#image-header');
const imageArray = [
  {
    image: 'url(0.jpg)',
    header: 'Header One'
  }, {
    image: 'url(1.jpg)',
    header: 'Header Two'
  }, {
    image: 'url(2.jpg)',
    header: 'Header Tree'
  }, {
    image: 'url(3.jpg)',
    header: 'Header Four'
  }, {
    image: 'url(4.jpg)',
    header: 'Header Five'
  }
];
let counter = 0;

//Functions

nextBtn.addEventListener('click', () => {
  imagesContainer.animate([
    {
      opacity: '0.1'
    }, {
      opacity: '1.0'
    }
  ], {
    duration: 1000,
    fill: 'forwards'
  });

  if (counter == imageArray.length - 1) {
    counter = -1;
  }
  counter++;
  console.log(counter);
  imagesContainer.style.backgroundImage = imageArray[counter].image;
  imageHeader.innerHTML = imageArray[counter].header;

});

prevBtn.addEventListener('click', () => {
  imagesContainer.animate([
    {
      opacity: '0.1'
    }, {
      opacity: '1.0'
    }
  ], {
    duration: 1000,
    fill: 'forwards'
  });
  if (counter < imageArray.length - (imageArray.length - 1)) {
    counter = imageArray.length;
  }
  counter--;
  console.log(counter);
  imagesContainer.style.backgroundImage = imageArray[counter].image;
  imageHeader.innerHTML = imageArray[counter].header;

});
