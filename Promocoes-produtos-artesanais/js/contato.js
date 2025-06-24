/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[rndInt].titulo}`; 
/*--FIM DO HEADER--------------------------------------------------------------------*/



/*--CONTATO-----------------------------------------------------------------*/
const cont = document.getElementById('contato')
cont.addEventListener
    ('show.bs.modal', event => 
        {
            const button = event.relatedTarget
            const heading = button.getAttribute('data-bs-heading')
            cont.querySelector('.modal-title').textContent = heading;
        }
    )
/*--FIM DO CONTATO-----------------------------------------------------------*/
/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt2 = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[rndInt2].texto}`; 
/*--FIM DO FOOTER--------------------------------------------------------------------*/
