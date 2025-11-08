let casos = [];

function adicionarCaso() {
  const input = document.getElementById('nome-caso');
  const nome = input.value.trim();

  if (nome) {
    casos.push(nome);
    input.value = '';
    atualizarListaCasos();
  }
}

function atualizarListaCasos() {
  const lista = document.getElementById('lista-casos');
  lista.innerHTML = '';

  casos.forEach((caso, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${caso}`;
    lista.appendChild(item);
  });
}

// Inicializar lista vazia
document.addEventListener('DOMContentLoaded', function() {
  atualizarListaCasos();
});