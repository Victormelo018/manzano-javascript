alert("maior e menor valor")

let valorDigitado , maior, menor  

valorDigitado = 0

valorDigitado = parseInt(prompt("digite um valor"))

maior = valorDigitado
menor = valorDigitado


while (valorDigitado >= 0 ){
    valorDigitado = parseInt(prompt("digite um valor"))

    if (valorDigitado >= 0){ 

    if  (valorDigitado > maior){
        maior = valorDigitado
    }

    if (valorDigitado < menor ) {
        menor = valorDigitado
    }
    }

}

alert( `o menor valorDigitado ${menor} o maior valorDigitado é : ${maior}`)
