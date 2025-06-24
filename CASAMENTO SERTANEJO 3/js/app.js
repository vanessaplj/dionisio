const dbpath = '../db/servicos.js';
let state = {
    div: document.getElementById("sec01")
}

function load() {
    state.div.innerHTML = ''

    for (i = 0; i < servicos.length; i++) {
        state.div.innerHTML += `
        <div class="col-lg-3 mb-3">
                <div class="fakecard">
                    <img src="${servicos[i].url}" class="card-img-top" alt="..."> 
                    <div class="card-body p-3">
                        <h5 class="card-title pb-1">${servicos[i].servico}</h5>
                        <p class="card-text">${servicos[i].descricao}</p>
                    </div>
                </div>
            </div>`
    }
}
 
load();