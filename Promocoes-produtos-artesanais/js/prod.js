/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[rndInt].titulo}`; 
/*--FIM DO HEADER--------------------------------------------------------------------*/
/*--PRODUTOS--------------------------------------------------------------------*/
let state = {
    div: document.getElementById("sec01")
}

function load() {
    state.div.innerHTML = ''

    for (i = 0; i < 12; i++) {
        state.div.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
                <div class="card">
                    <img src="${catalogoFilmesSeries[i].imagem}" class="card-img-top" alt="..."> 
                    <div class="card-body p-3">
                        <h5 class="card-title pb-1">${catalogoFilmesSeries[i].titulo}</h5>
                        <p class="card-text">${catalogoFilmesSeries[i].sinopse}</p>
                        <button type="button" class="btn btn-outline-dark" data-bs-target="#exit"
                        data-bs-toggle="modal">
                        Saiba mais
                    </button>
                    </div>
                </div>
            </div>`
    }
}
 
load();
/*--FIM DO PRODUTOS--------------------------------------------------------------------*/
/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt2 = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[rndInt2].texto}`; 
/*--FIM DO FOOTER--------------------------------------------------------------------*/
 