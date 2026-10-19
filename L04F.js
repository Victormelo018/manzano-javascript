alert("total e media aritmetica")

let numero,media,somatorio,totalLidos


somatorio = 0
totalLidos = 0

do {


numero = parseInt(prompt("Digite um valor "))

if (numero >= 0 ){

    somatorio = somatorio + numero
    totalLidos = totalLidos + 1
}

else {
    alert("o programa foi finalizado")
}

} while (numero >= 0)

    if (totalLidos >0) {
        media = somatorio / totalLidos

        alert(`a soma total dos valores foi ${somatorio} a media artmetica foi ${media} e total de numeros lidos foi ${totalLidos}`)
    }
    else{
        alert("nenhum numero inteiro foi lido")
    }
    

    