limpar();

function adicionar (){
   // recuperar valores, produto e quantidade
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnidade = produto.split('R$')[1];
    //calcular o preco, o nosso subtotal
    let preco = quantidade * valorUnidade;
    //adicionar ao carrinho
   let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;

   //inserir valores Total
   valorTotal = valorTotal + preco;
   let campoTotal = document.getElementById('valor-total');
   campoTotal.textContent = `R$ ${valorTotal}`;

}
function limpar (){

   document.getElementById('lista-produtos').innerHTML = '';
   document.getElementById('valor-total').innerHTML = '';
   valorTotal = 0;

}