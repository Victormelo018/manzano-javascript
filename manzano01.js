// qualquer sistema computacional é composto por 3 grandes partes: sendo elas:
/*

1: Entrada de dados
2: Processamento de dados
3: Saída de dados
*/

alert("Programa tabuada")

let numero = 0
let multiplacacao = 0
let contador = 1

numero = parseInt(prompt("Digite um numero para fazermos a sua tabuada de 1 a 10: "))
while (contador < 11 ) {
    multiplicacao = numero * contador

    console.log(`${numero} x ${contador} = ${multiplicacao} `);
    contador = contador +1
      
    
    
}