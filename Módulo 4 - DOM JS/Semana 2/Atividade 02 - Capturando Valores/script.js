const btn = document.getElementById("btnCalcular");
btn.addEventListener('click', calcular);

function calcular() {
    var altura = parseFloat(document.getElementById('txtAltura').value);
    var peso = parseFloat(document.getElementById('txtPeso').value);
    var imc = peso / (altura * altura);
    var div = document.getElementById('divIMC');
    
    div.innerHTML = "O IMC é " + imc.toFixed(2);
}



