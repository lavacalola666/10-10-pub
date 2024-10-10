function criarCartao(categoria,pergunta,resposta){
    let conteiner = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHtml = `
<div class="cartao_conteudo">
   <h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
   <p>${resposta}</p>
</div>
</div> `
container.appendChild(cartao)
}
let respostaEstaVisivel= false
function ViraCartao(){
   respostaEstaVisivel = !respostaEstaVisivel
   cartao.classlis.toogle('active', respostaEstaVisivel)
}
cartao.addEventListener('click',ViraCartao)