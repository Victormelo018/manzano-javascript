alert("maior valor e menor valor")

let numero, maior,menor

maior = null
menor = null

do{
numero = parseInt(prompt("digite um valor"))

    if (numero >= 0) {
if (maior === null){
maior = numero
menor = numero
}

if ( numero > maior){

maior = numero
 }
if (numero < menor) {
menor = numero
   
}
    }

}while (numero >= 0)

    alert(`o menor foi ${menor} e o maior foi ${maior}`)