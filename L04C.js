alert("divisiveis por 4 dos menores de 200")

let numero

numero = 1


do {
    if  (numero % 4 === 0){
        alert(`${numero}`)
        
    }
    numero = numero + 1
} while (numero < 200)