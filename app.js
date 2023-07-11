//JAVASCRIPT
const title = document.querySelector('h1');
let originalTitle = title.innerText;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = 0;



title.addEventListener('mouseover', e => {
  const interval = setInterval(() => {
  letterChanger(e.target);
  if(iterations >= e.target.length) clearInterval(interval)
  iterations += 1/5;
}, 30);

})

function letterChanger(e) {
    let targetLetters = e.innerText.split('')
    let targetLettersSwitch = targetLetters.
    map((letter, index) => {
      if(index < iterations) {
        return e.dataset.value[index];
      }

      return letters[Math.floor(Math.random()*26)]
    })
    let newText = targetLettersSwitch.join('')

    e.innerText = newText;
  }


