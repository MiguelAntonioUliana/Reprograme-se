var cachorros = [{ "nome": "Thor", "imagem": "./img/dog1.jpg" }, { "nome": "Zeca", "imagem": "./img/dog2.jpg" }, { "nome": "Zeus", "imagem": "./img/dog3.jpg" }, { "nome": "Pingo", "imagem": "./img/dog4.jpg" }];

var gatos = [{ "nome": "Dunga", "imagem": "./img/cat1.jpg" }, { "nome": "Mika", "imagem": "./img/cat2.jpg" }, { "nome": "Conan", "imagem": "./img/cat3.jpg" }, { "nome": "Messi", "imagem": "./img/cat4.jpg" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
const select_animais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
const container = document.getElementById('container');
// Selecionar elemento 'nome' ( 1 ponto)
const nome = document.getElementById('nome');

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select_animais.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  // Criar elementos do tipo <img src=./img/....
  // Fazer com que os elementos img sejam filhos do elemento 'container'
  if (select_animais.value == "dog") {
    for (let i = 0; i <= 3; i++) {
      img = document.createElement('img');
      img.src = cachorros[i].imagem;
      img.name = cachorros[i].nome;
      container.appendChild(img);
    } 
  } else if (select_animais.value == "cat") {
    for (let i = 0; i <= 3; i++) {
      img = document.createElement('img');
      img.src = gatos[i].imagem;
      img.name = gatos[i].nome;
      container.appendChild(img);
    }
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = e.target.name;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}