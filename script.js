const imagem = document.querySelector('img');

const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');
const personagens = [];
traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagens = async () => {
    personages = []
    let i = 0;
    while ( i < 3 ){
        const response = await fetch(`https://rickandmortyapi.com/api/character/${gerarValorAletorio()}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
        })
        const data = await response.json();
        console.log('#nome_'+(i + 1));
        document.getElementById('imagem_'+(i + 1)).src= data.image;
        document.getElementById('imagem_'+(i + 1)).alt= data.name;
        document.getElementById('nome_'+(i + 1)).innerHTML = data.name;
        document.getElementById('especie_'+(i + 1)).innerHTML = data.species;
        document.getElementById('status_'+(i + 1)).innerHTML = traduzirCondicao(data);
        i++;
    }

}


botao.onclick = pegarPersonagens;