alert("Média aritmetica dos numeros pares entre 50 a 70")

let media,numero,contador,soma

contador = 0
media =0
soma = 0
numero = 50

while (numero < 71){
    if (numero % 2 === 0){
        soma = soma + numero

    }
    numero = numero + 1
}

media = (soma / 11)

alert(`A soma é : ${soma} e a media é : ${media}`)