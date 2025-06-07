const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

setaEsquerda.addEventListener('click', girarParaEsquerda);
setaDireita.addEventListener('click', girarParaDireita);

function girarParaEsquerda() {
  const caixas = document.querySelector('.caixas-projetos');
  const projetos = caixas.querySelectorAll('div');

  // Move o primeiro para o final — tudo desloca para esquerda
  caixas.appendChild(projetos[0]);

  atualizarClasses();
}

function girarParaDireita() {
  const caixas = document.querySelector('.caixas-projetos');
  const projetos = caixas.querySelectorAll('div');

  // Move o último para o começo — tudo desloca para direita
  caixas.insertBefore(projetos[projetos.length - 1], projetos[0]);

  atualizarClasses();
}

function atualizarClasses() {
  const projetos = document.querySelectorAll('.caixas-projetos div');

  projetos.forEach(projeto => {
    projeto.classList.remove('projeto-lateral', 'projeto-central', 'esquerdo', 'direito');
  });

  projetos[0].classList.add('projeto-lateral', 'esquerdo');
  projetos[1].classList.add('projeto-central');
  projetos[2].classList.add('projeto-lateral', 'direito');

  const descricoes = document.querySelectorAll('.descricao-item');

  const projetoCentral = projetos[1];
  const projetoAtual = projetoCentral.getAttribute('data-projeto');

  descricoes.forEach((desc, i) => {
    desc.classList.remove('ativa');
  });

  if (projetoAtual === 'portifolio') {
    descricoes[0].classList.add('ativa');
  } else if (projetoAtual === 'projeto2') {
    descricoes[1].classList.add('ativa');
  } else if (projetoAtual === 'projeto3') {
    descricoes[2].classList.add('ativa');
  }
}
