let jogosAlugados = 0;

function ListaQuantidadeAlugados() {
    console.log(`No momento estão alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameClick = document.getElementById(`game-${id}`);
    let imagem = gameClick.querySelector('.dashboard__item__img');
    let botao = gameClick.querySelector('.dashboard__item__button');
    let Nome = gameClick.querySelector('.dashboard__item__name');

    // alterando o status da imagem.
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }
    //  alterando o status do botao e texto para evitar devoluções acidentais. 
    if (botao.classList.contains('dashboard__item__button--return')){
        if(confirm(`Gostaria realmente de devolver o ${Nome.textContent}?`))
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    ListaQuantidadeAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados (apoio instrutor)
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    ListaQuantidadeAlugados();
});
