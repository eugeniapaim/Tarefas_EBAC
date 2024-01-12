function calculadora() {

    let num1 = 0;
    let num2 = 0;
    let operacao = "";
    let resultado = 0;

    num1 = prompt("Digite o primeiro número:");
    num2 = prompt("Digite o segundo número:");
    operacao = prompt("Digite a operação (+, -, *, /):");


    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida!");
            return;
    }


    alert("O resultado é: " + resultado);
}

calculadora();