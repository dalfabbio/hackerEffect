const title = document.querySelector('h1');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations=0;
let interval = null;




title.addEventListener('mouseover', e => {
  clearInterval(interval)
  interval = setInterval(() => {
  letterChanger(e.target);
  if(iterations >= e.target.length) clearInterval(interval)
  iterations += 1/3; //PIù E' BASSO IL VALORE PIù VOLTE UNA LETTERA SARà RANDOMICA PRIMA DI FERMARSI SU QUELLA CORRETTA
}, 30);
iterations = 0;
})

function letterChanger(e) {
    let targetLetters = e.innerText.split('') //trasforma in testo in un array in modo tale da poterci applicare i metodi relativi
    let targetLettersSwitch = targetLetters.map((letter, index) => {
      if(index < iterations) { //IN QUESTO MODO VIENE RESTITUITA LA LETTERA CORRETTA SOLO QUANDO LE ITERAZIONI SONO STATE SUFFICIENTI AD ARRIVARE A CORRISPONDERE A UN INDICE (quindi un numero intero)
        return e.dataset.value[index];
      }

      return letters[Math.floor(Math.random()*26)]
    })
    let newText = targetLettersSwitch.join('') //ritrasforma il testo in stringa, altrimenti verrebbe a schermo separato da virgole

    e.innerText = newText;
  }


