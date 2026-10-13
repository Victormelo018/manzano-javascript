alert("somatória e aritmética de 10 numeros")

let somatoria,numero,media,contador


contador = 0
somatoria = 0

while (contador < 10) {
numero = parseInt(prompt("digite um dos 10 numeros"))
somatoria = somatoria + numero
numero = 0
contador = contador + 1 
}
media = (somatoria / 10)

alert(` a soma é ${somatoria} e a média é ${media}`)