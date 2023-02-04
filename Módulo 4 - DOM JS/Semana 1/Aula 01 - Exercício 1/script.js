var elementos = document.getElementsByTagName("*");

document.write("Quantidade de elementos: " + elementos.length);

var todosElementos = "";

for (let e of elementos) {
 todosElementos = todosElementos + e.tagName + "<br>"
}

document.write(todosElementos);