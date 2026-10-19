alert("somatoria valores pares de 1 a 500")

let number, somatoria

number = 0 
somatoria = 0
do{
    if (number % 2 === 0){
        somatoria = somatoria + number
    }
    number = number + 1
}while (number < 501)

    alert(`${somatoria}`)