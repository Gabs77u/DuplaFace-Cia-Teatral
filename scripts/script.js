// Seleção de elementos do DOM
const abrir = document.getElementById('abrir');
const container_modal = document.getElementById('container-modal');
const fechar = document.getElementById('fechar');

// Função para abrir o modal
abrir.addEventListener('click', () => {
  container_modal.classList.remove('container-modal-desativado')
  container_modal.classList.add('container-modal-ativado');
});

// Função para fechar o modal
fechar.addEventListener('click', () => {
  container_modal.classList.remove('container-modal-ativado')
  container_modal.classList.add('container-modal-desativado')
})

// Função para controlar o carrossel de imagens
const botoes = document.querySelectorAll("[data-carrossel-botao]")

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const deslocamento = botao.dataset.carrosselBotao === "proximo" ? 1 : -1
    const slides = botao
      .closest("[data-carrossel]")
      .querySelector("[data-slides]")

    const slideAtivo = slides.querySelector("[data-ativo]")
    let novoIndex = [...slides.children].indexOf(slideAtivo) + deslocamento
    if (novoIndex < 0) novoIndex = slides.children.length - 1
    if (novoIndex >= slides.children.length) novoIndex = 0

    slides.children[novoIndex].dataset.ativo = true
    delete slideAtivo.dataset.ativo
  })
})

// Animação de rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animação de fade-in para elementos com a classe 'fade-in'
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
      }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animação de hover para botões com a classe 'btn'
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
      button.classList.add('hover');
  });
  button.addEventListener('mouseout', () => {
      button.classList.remove('hover');
  });
});
