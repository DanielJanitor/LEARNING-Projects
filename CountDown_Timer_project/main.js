const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector('.clock');
let timeInterval;
let timeStop = true;
const savedValue = localStorage.getItem('countdown') || false;

if (savedValue) {
  startCloct(savedValue);
  let inputValue = new Date(savedValue);
  console.log(inputValue);
  endDate.valueAsDate = inputValue;
}

endDate.addEventListener('change', function(e) {
  e.preventDefault();
  clearInterval(timeInterval);
  console.log(endDate.value);
  const temp = new Date(endDate.value);
  localStorage.setItem('countdown', temp)
  console.log(temp);
  startCloct(temp);
  timeStop = false;
})

function startCloct(d) {
  function updateCounter() {
    let tl = (timeLeft(d));
    if (tl.total <= 0) {
      timeStop = false;
    }
    for (let pro in tl) {
      let el = clock.querySelector("." + pro);
      if (el) {
        el.innerHTML = tl[pro];
      }
    }
  }
  updateCounter();
  if (timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}

function timeLeft(d) {
  let currentDate = new Date();
  console.log(Date.parse(d));
  console.log(currentDate);
  console.log(Date.parse(currentDate));
  let time = Date.parse(d) - Date.parse(currentDate);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {'total': time, 'days': days, 'hours': hours, "minutes": minutes, 'seconds': seconds};
}
