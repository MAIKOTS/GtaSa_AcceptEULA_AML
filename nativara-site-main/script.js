// Variáveis do Carrossel
let slideAtual = 0;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.carousel-dots .dot');
const totalSlides = dots.length;

// Atualiza a posição do carrossel e a bolinha ativa
function atualizarCarrossel() {
    track.style.transform = `translateX(-${slideAtual * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideAtual);
    });
}

// Avança ou volta um slide
function moverSlide(direcao) {
    slideAtual += direcao;
    
    // Se passar do último, volta pro primeiro (e vice-versa)
    if (slideAtual >= totalSlides) slideAtual = 0;
    if (slideAtual < 0) slideAtual = totalSlides - 1;
    
    atualizarCarrossel();
}

// Vai para um slide específico ao clicar na bolinha
function irParaSlide(index) {
    slideAtual = index;
    atualizarCarrossel();
}

// (Opcional) Passar as imagens automaticamente a cada 5 segundos
// setInterval(() => moverSlide(1), 5000);
