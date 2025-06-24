/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[rndInt].titulo}`;
/*--FIM DO HEADER--------------------------------------------------------------------*/
/*--EVENTOS--------------------------------------------------------------------*/
let state = {
  div: document.getElementById("sec01")
}

function load() {
  state.div.innerHTML = ''

  for (i = 0; i < 6; i++) {
    state.div.innerHTML += `
        <div class="col-lg-6 mb-3">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-6">
                <img src="${eventos[i].imagem}" class="img-fluid rounded-start" alt="...">
              </div>
            <div class="col-md-6">
              <div class="card-body">
                <strong class="card-title">${eventos[i].nome}</strong>
                <p class="card-text">${eventos[i].local}<br>
                                    ${eventos[i].data} - ${eventos[i].horario}<br>
                                    ${eventos[i].tipo}
                </p>
              </div>
            </div>
          </div>
        </div>`
  }
}

load();
/*--FIM DO EVENTOS--------------------------------------------------------------------*/
/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt2 = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[rndInt2].texto}`;
/*--FIM DO FOOTER--------------------------------------------------------------------*/