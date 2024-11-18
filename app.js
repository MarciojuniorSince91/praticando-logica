function sortear(){


}

function alterarStatusBotao(){
   let botao = getElementById('btn-reiniciar');

   if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
   } else {
    botao.classList.add('container__botao-desabilitado');
    botao.classList.Remove('container__botao');
   }
}