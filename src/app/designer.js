function desenharCasosCards(idContainer, arrayDeCasos){
    let containerDeCasos = document.getElementById(idContainer);

    containerDeCasos.innerHTML = '';

    for (const caso of arrayDeCasos) {
        containerDeCasos.innerHTML += `
        <div class="card">
            <div class="card">
                <div class="conteudo">
                    <h3 class="nomeCaso"><a href='detalhes.html?id=${caso.id}'>${caso.nomeCaso}</a></h3>
                    <div class="imagem-container">
                        <img class="foto" src="imagens/${caso.foto}" alt="Imagem do Caso">
                    </div>
                    <p class="data">${caso.data}</p>
                </div>
               
                </div>
            </div>
        `;
    }
}

function desenharCardDetalhe(idCard, arrayDeCasos, idCaso){
    let caso = arrayDeCasos.find((caso) => caso.id == idCaso);
    console.log(arrayDeCasos);
    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = `
        <div class="conteudo">
            <h3 class="nomeCaso">${caso.nomeCaso}</h3>
            <div class="imagem-container">
                <img class="foto" src="imagens/${caso.foto}" alt="Imagem do Caso">
            </div>
            <p class="descricao">${caso.acontecimento}</p>
            <p class="local">${caso.local}</p>
            
            <p class="vitima">${caso.vitima.nome}</p>
            <p class="idade">${caso.vitima.idade}</p>
            <p class="status">${caso.vitima.status}</p>
            <p class="data">${caso.data}</p>
            <p class="resolucao">${caso.resolucao}</p>
            <p class="relato">${caso.vitima.relato}</p>
            <p class="youkai">${caso.youkai.nome}</p>
            <p class="rank"> Rank : ${caso.youkai.rank}</p> 
            <p class="natureza"> Tipo : ${caso.youkai.natureza}</p>
        
    `;
}
