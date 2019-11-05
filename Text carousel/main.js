const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const textHeader = document.querySelector('.text-header')
const h1 = document.querySelector('.h1-text');
const p = document.querySelector('.p-text');
let counter = 0;
const textArray = [
    {
      h1text: 'Header1',
      ptext: 'P1 Lorem ipsum dolor sit amet consectetur adipisicing elit'
    }, {
      h1text: 'Header2',
      ptext: 'P2 Lorem ipsum dolor sit amet consectetur adipisicing elit'
    }, {
      h1text: 'Header3',
      ptext: 'P3 Lorem ipsum dolor sit amet consectetur adipisicing elit'
    }
  ];

  nextBtn.addEventListener('click', () => {
    textHeader.animate([
      {
        opacity: '0.1'
      }, {
        opacity: '1.0'
      }
    ], {
      duration: 1000,
      fill: 'forwards'
    });
  
    if (counter == textArray.length - 1) {
      counter = -1;
    }
    counter++;
    console.log(counter);
    h1.innerHTML = textArray[counter].h1text;
    p.innerHTML = textArray[counter].ptext;
  });


  prevBtn.addEventListener('click', () => {
    textHeader.animate([
      {
        opacity: '0.1'
      }, {
        opacity: '1.0'
      }
    ], {
      duration: 1000,
      fill: 'forwards'
    });
    if (counter < textArray.length - (textArray.length - 1)) {
      counter = textArray.length;
    }
    counter--;
    console.log(counter);
    h1.innerHTML = textArray[counter].h1text;
    p.innerHTML = textArray[counter].ptext;
  });
