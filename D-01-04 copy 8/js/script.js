// Exercício 09

let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o primeiro número: '));

let operacao = prompt('Digite a operação matemática: ')

switch(operacao){
    case "+":
        console.log{`O resultado será: ${n1 + n2}`};
        break;

    case "-":
        console.log{`O resultado será: ${n1 - n2}`};
        break;

    case "*":
        console.log{`O resultado será: ${n1 * n2}`};
        break;

    case "/":
        console.log{`O resultado será: ${n1 / n2}`};
        break;

        default:
            console.log('Apenas: "+" | "-" | "*" | "/" ');
}