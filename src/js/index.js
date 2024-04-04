/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
    
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça


Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

// Obtém o modal
var modal = document.getElementById("trailerModal");

// Obtém o botão que abre o modal
var btn = document.querySelector(".btn-trailler");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close-button")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica em <span> (x), fecha o modal e pausa o vídeo
span.onclick = function() {
    modal.style.display = "none";
    var video = document.getElementById("videoTrailer"); // Obtém o vídeo
    video.pause(); // Pausa o vídeo
    video.currentTime = 0; // Opcional: Retorna o vídeo para o início
  }

// Também fecha quando clicar fora do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

