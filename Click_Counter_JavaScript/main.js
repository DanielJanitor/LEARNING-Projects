let counter = 0;
document.addEventListener("DOMContentLoaded", function(event) {
  const body = document.querySelector('body');
  let output = document.createElement('div');
  console.log(output);
  output.innerHTML = 'Click the button';
  output.style.fontSize = '2em';
  output.style.padding = '5px';
  output.style.FontFamily = 'fantasy';
  output.setAttribute('class', 'message');
  body.appendChild(output);
  let btn = document.createElement('button');
  btn.innerHTML = 'Click me';
  btn.style.border = '1px solid #ddd';
  btn.style.padding = '25px';
  btn.style.width = '400px';
  btn.style.fontSize = '2em';
  btn.textAligh = 'center';
  btn.style.backgroundColor = 'red';
  btn.style.color = 'white';






  btn.addEventListener('click', function() {
    console.log('clicked');
    counter++;
    let message = 'You clicked this ' + counter + ' times.';
    document.querySelector('.message').innerHTML = message;
  })

  body.appendChild(btn);
})
