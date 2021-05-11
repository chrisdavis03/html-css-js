const myProgress = document.querySelector('.htmlProgress')
const cssProgress = document.querySelector('.cssProgress')
const test = document.querySelector('.test')

// static data
let progressions = [
  {
    name: 'Python',
    value: 30,
    max: 100
  },
  {
    name: 'Flask',
    value: 50,
    max: 100
  },
  {
    name: 'HTML',
    value: 80,
    max: 100
  },
  {
    name: 'Javascript',
    value: 10,
    max: 100
  },
]

//html progress bars. CSS for postitioning only.
let progressBars = progressions.map(function(item) {
  let pBar = document.createElement('progress');
  // pBar.style.cssText = 'display: flex;justify-content: center;align-items: center; padding-top: 10px; width: 200px; height: 24px; -webkit-appearance: none; -moz-appearance: none;appearance: none;'
  pBar.style.cssText = 'display: flex;justify-content: center;align-items: center; padding-top: 10px; width: 200px; height: 24px;'
  pBar.value = item.value;
  pBar.max = item.max;
  myProgress.appendChild(pBar);
})

const borderRadius = 7;

// css progress bars
let cssProgressBars = progressions.map(function(item) {
  //creating a container div lets us put space in between the progress Bars.
  let cBarContainer = document.createElement('div');
  cBarContainer.style.cssText = 'border-radius:' + borderRadius + 'px; margin-top: 10px; background: #b0aeab;'
  let cBar = document.createElement('div');
  cBar.style.cssText = 'text-align: right; border-radius:' + borderRadius + 'px; background: #ffbf5e; color: black ;height: 20px; width: ' + item.value + '%;';
  cBar.innerHTML = item.value + '%';
  cBarContainer.appendChild(cBar);
  cssProgress.appendChild(cBarContainer);
})
