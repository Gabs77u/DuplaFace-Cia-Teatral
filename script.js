const abrir = document.getElementById('abrir');
const container_modal = document.getElementById('container-modal');
const fechar = document.getElementById('fechar');

abrir.addEventListener('click', () => {
  container_modal.classList.remove('container-modal-desativado')
  container_modal.classList.add('container-modal-ativado');
});

fechar.addEventListener('click', () => {
  container_modal.classList.remove('container-modal-ativado')
  container_modal.classList.add('container-modal-desativado')
})

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