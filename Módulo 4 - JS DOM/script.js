document.write("Olá mundo!!");
// Escreve algo no HTML
document.write(Date());
// Escreve a data no documento
document.write(document.title);
// Escreve o título do documento
document.write(document.characterSet);
// UTF-8

var corpo = document.body; // Seleciona o body
corpo.style.background = "Gray"; // Muda a cor de fundo

document.title = "Novo título"; // Muda o título

// getElementById

var h1_brasil = document.getElementById("pais_brasil");
h1_brasil.style.background = "Yellow";
document.write("<p> innerText: " + h1_brasil.innerText);
document.write("<p> innerHTML: " + h1_brasil.innerHTML);
//alert(h1_brasil.innerHTML);

// getElementsByTagName

var array_h2 = document.getElementsByTagName("h2");
var h2_es = array_h2[0];
var h2_mg = array_h2[1];
h2_es.style.color = "Pink";
h2_mg.style.color = "Red";

// getElementsByName

var array_cidade = document.getElementsByName("cidade");
var cidade_0 = array_cidade[0];
cidade_0.style.borderLeftColor = "Yellow";

// getElementsByClassName

var array_cidade_mg = document.getElementsByClassName("cidade-mg");
var cidade_mg_1 = array_cidade_mg[1];
cidade_mg_1.style.borderLeftColor = "Yellow";

// querySelector 

var pais = document.querySelector("#pais_brasil");
pais.style.border = "2px solid green";
pais.style.textAlign = "center";

var cidades_es_0 = document.querySelector(".cidade-es");
cidades_es_0.style.color = "Blue";
// Seleciona apenas o primeiro elemento da classe "cidade-es"
