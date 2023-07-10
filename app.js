//JAVASCRIPT
const title = document.querySelector('h1');
let originalTitle = title.innerText;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervalOn;
let intervalOff;


title.addEventListener('mouseover', e => {
intervalOn = setInterval(() => {
  letterChanger(e.target)
}, 30);

intervalOff = setTimeout(()=> {
  clearInterval(intervalOn)   
}, 1000)
})

function letterChanger(e) {
    let targetLetters = e.innerText.split('')
    let targetLettersSwitch = targetLetters.map(letter => letters[Math.floor(Math.random()*26)])
    let newText = targetLettersSwitch.join('')
    e.innerText = newText;
  }

function letterReverser(e) {
  let targetLettersSwitch = targetLetters.map(letter => letters[Math.floor(Math.random()*26)])
  // let newText = targetLettersSwitch.join('')
  // e.innerText = newText;
}

  
// title.addEventListener('mouseout', e => {
//   clearInterval(intervalOn)   
//   e.target.innerText = originalTitle;
// })

