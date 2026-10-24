alert("sequencia fibonnacci")

let atual,anterior,proximo,contador

atual = 1
anterior = 0
proximo = 0 

alert(`${atual}`)

for(contador = 1; contador < 15; contador++){

    proximo = atual + anterior
    anterior = atual
    atual = proximo

    alert(`${proximo}`)

}