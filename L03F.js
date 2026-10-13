alert("Potenciação")

let num, expoente, resultado, contador 
resultado = 1 
contador =0

num = parseInt(prompt("digite um numero para saber a potenciação"))

expoente = parseInt(prompt("digite o numero expoente"))

while ( contador < expoente){
    
    resultado = resultado * num
    contador = contador + 1
}
alert(`${resultado}`)