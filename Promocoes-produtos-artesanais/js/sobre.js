/*--HEADER----------------------- ---------------------------------------------*/
const dbpath = '../db/dados.js';

let header = document.getElementById("header");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(0, 5);

header.innerHTML += `${noticias[rndInt].titulo}`; 
/*--FIM DO HEADER--------------------------------------------------------------------*/
/*--SOBRE----------------------- ---------------------------------------------*/
let titulo = document.getElementById("titulo");
let art = document.getElementById("art");
let img1 = document.getElementById("img1");
let titulo2 = document.getElementById("titulo2");
let poema = document.getElementById("poema");
let img2 = document.getElementById("img2");
let titulo3 = document.getElementById("titulo3");
let poema2 = document.getElementById("poema2");
let img3 = document.getElementById("img3");
let titulo4 = document.getElementById("titulo4");
let poema3 = document.getElementById("poema3");
let img4 = document.getElementById("img4");
let titulo5 = document.getElementById("titulo5");
let poema4 = document.getElementById("poema4");
let img5 = document.getElementById("img5");

titulo.innerHTML += `${artigos[3].titulo}`;
art.innerHTML += `<p>${artigos[3].paragrafo01}</p>
                  <p>${artigos[3].paragrafo02}</p>
                  <p>${artigos[3].paragrafo03}</p>`;
img1.innerHTML += `<img src='${galeriaFotos[6].imagem}' style='width:100%'>`;
img2.innerHTML += `<img src='${poemas[0].imagem}' style='width:100%'>`;
titulo2.innerHTML += `${poemas[0].titulo}`;
poema.innerHTML += `<p>${poemas[0].autor}<br>
                    ${poemas[0].estilo}<br>
                    ${poemas[0].ano}</p>`;
img3.innerHTML += `<img src='${poemas[1].imagem}' style='width:100%'>`;
titulo3.innerHTML += `${poemas[1].titulo}`;
poema2.innerHTML += `<p>${poemas[1].autor}<br>
                    ${poemas[1].estilo}<br>
                    ${poemas[1].ano}</p>`;
img4.innerHTML += `<img src='${poemas[2].imagem}' style='width:100%'>`;
titulo4.innerHTML += `${poemas[2].titulo}`;
poema3.innerHTML += `<p>${poemas[2].autor}<br>
                    ${poemas[2].estilo}<br>
                    ${poemas[2].ano}</p>`;
img5.innerHTML += `<img src='${poemas[3].imagem}' style='width:100%'>`;
titulo5.innerHTML += `${poemas[3].titulo}`;
poema4.innerHTML += `<p>${poemas[3].autor}<br>
                    ${poemas[3].estilo}<br>
                    ${poemas[3].ano}</p>`;
/*--FIM DO SOBRE--------------------------------------------------------------------*/ 
/*--FOOTER----------------------- ---------------------------------------------*/
let footer = document.getElementById("footer");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt2 = randomIntFromInterval(0, 5);

footer.innerHTML += `${poemas[rndInt2].texto}`; 
/*--FIM DO FOOTER--------------------------------------------------------------------*/ 