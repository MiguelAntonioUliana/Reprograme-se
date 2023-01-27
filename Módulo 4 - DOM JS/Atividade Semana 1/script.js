// Selecionar todos elementos da classe 'produto_preco'

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)

// Escrever no conteúdo da página o valor da soma


var precos = document.getElementsByClassName("produto_preco");

var soma = 0;

for (let e of precos) {
    precos = parseFloat(e.innerText);
    soma = soma + precos;
}

document.write("Total: RS " + soma);