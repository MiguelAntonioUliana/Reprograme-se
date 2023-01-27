
process.stdin.on('data', function(data) {

  console.log('O usuário inseriu: ' + data);
    let idade = console.log("Digite sua idade: " + data);
    let tempo = console.log("Digite sua idade: " + data);
    let salario = console.log("Digite sua idade: " + data);
});



if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) {
    console.log("Você pode se aposentar!");
    if (tempo > 20) {
        salario = salario * 0.8;
        if (salario < 1212) {
            salario = 1212;
        } else if (salario > 7087.22) {
            salario = 7087.22;
        }
    } else {
        salario = salario * 0.6;
        if (salario < 1212) {
            salario = 1212;
        } else if (salario > 7087.22) {
            salario = 7087.22;
        }
    }
} else {
    console.log("Você não pode se aposentar!");
}

console.log("Seu salário de aposentado será: R$", salario);
