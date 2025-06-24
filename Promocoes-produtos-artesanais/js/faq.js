/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[rndInt].titulo}`; 
/*--FIM DO HEADER--------------------------------------------------------------------*/
/*--FAQ--------------------------------------------------------------------*/
let accordion = document.querySelector(".accordion");
let accordion__content = document.querySelectorAll(".accordion__content");
let accordion__show = document.querySelectorAll(".accordion__show");

accordion__show.forEach(function (current, index) {
    current.addEventListener("click", (e) => {
        e.preventDefault();
        accordion__content[index].classList.toggle("show_text");
        accordion__content[index].innerHTML = frasesMotivacionais[index].frase;
    })
})
/*--FIM DO FAQ--------------------------------------------------------------------*/
/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt2 = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[rndInt2].texto}`; 
/*--FIM DO FOOTER--------------------------------------------------------------------*/

