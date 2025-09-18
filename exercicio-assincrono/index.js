(() => {
  const botaoBuscar = document.getElementById('carrega-devs');
  const inputNome = document.getElementById('nome-dev');
  const resultado = document.createElement('div');
  document.body.appendChild(resultado);

  async function buscaUsuarios(user) {
    const resposta = await fetch(`https://api.github.com/search/users?q=${user}`);
    const dados = await resposta.json();
    return dados.items; 
  }

  function mostraUsuarios(lista) {
    resultado.innerHTML = ""; 

    if (!lista || lista.length === 0) {
      resultado.innerText = "Não foram encontrados usuários para esta pesquisa";
      return;
    }

    const ul = document.createElement('ul');
    for (let usuario of lista) {
      const li = document.createElement('li');
      li.innerText = usuario.login;
      ul.appendChild(li);
    }
    resultado.appendChild(ul);
  }

  botaoBuscar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    if (nome === "") {
      alert("Digite um nome para buscar!");
      return;
    }

    buscaUsuarios(nome)
      .then(res => mostraUsuarios(res))
      .catch(err => {
        console.error(err);
        resultado.innerText = "Erro ao buscar usuários.";
      });
  });
})();
