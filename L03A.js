alert("Tabuada")

let numero,contador , soma

contador = 1
numero = parseInt(prompt("digite um numero para saber a tabuada "))
while (contador <11) {
    soma = numero * contador
    alert(`${numero} * ${contador} = ${soma}`)
    contador = contador +1
}