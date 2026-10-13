("valores pares existentes de 1 até 500")

let contador,soma 

contador =1
soma = 0

while (contador < 501){
    
        if (contador % 2 === 0){

    soma = soma + contador
        }
        contador = contador + 1
}

alert(`${soma}`)