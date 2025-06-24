/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const indheader = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[indheader].titulo}`; 
/*--FIM DO HEADER--------------------------------------------------------------------*/

/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const indfoot = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[indfoot].texto}`; 
/*--FIM DO FOOTER--------------------------------------------------------------------*/