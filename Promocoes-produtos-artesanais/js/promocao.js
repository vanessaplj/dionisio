/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

alert("As promoções duram apenas 24 horas, aproveite!");
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[rndInt].titulo}`; 
/*--FIM DO HEADER--------------------------------------------------------------------*/
/*--PROMOCAO----------------------- ---------------------------------------------*/
let promocao = document.getElementById("promocao");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt3 = randomIntFromInterval(0, 19);
let ind =rndInt3;

promocao.innerHTML += `<figure>
                          <img src='${listaFotos[ind].imagem}' alt='' style='width:100%'>
                          <figcaption style='text-align:center'>${listaFotos[ind].nome}</figcaption>
                      </figure>`; 
/*--FIM DO PROMOCAO--------------------------------------------------------------------*/ 

/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt2 = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[rndInt2].texto}`; 
/*--FIM DO FOOTER--------------------------------------------------------------------*/ 