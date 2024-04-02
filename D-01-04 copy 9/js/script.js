// Exercício 10

let n1 = parseInt(prompt("Digite um número"))

var nimpar = 0

while (nimpar < n1){
    nimpar++;
    console.log(`${nimpar} é impar`)
    nimpar++;
    }if (n1 & 1){
        console.log(`O número escolhido (${n1}) é impar`)
    }else {
        console.log(`O número escolhido (${n1} é par)`)
    }
    