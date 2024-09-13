const imagem = document.getElementById('imagem');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const botao6 = document.getElementById('botao6');
// cada elemendo no html virou uma variável no Js
function trocarimagem(img){
    imagem.src = img;
}
botao1.addEventListener('click',function(){
        trocarimagem('imagem1.jpg')
})

botao2.addEventListener('click',function(){
    trocarimagem('imagem2.jpg')
})

botao3.addEventListener('click',function(){
    trocarimagem('imagem3.jpg')
})

botao4.addEventListener('click',function(){
    trocarimagem('imagem4.jpg')
})

botao5.addEventListener('click',function(){
    trocarimagem('imagem5.jpeg')
})

botao6.addEventListener('click',function(){
    trocarimagem('imagem6.jpg')
})