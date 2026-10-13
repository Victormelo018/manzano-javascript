alert("Fibonatti")

let anterior,proximo,contador,atual

anterior = 1
atual = 1
contador = 0
alert(`${atual}`)
while(contador < 14){
    proximo = anterior + atual
    alert(`${atual}`)
    anterior = atual
    atual = proximo

    contador = contador + 1 
    

}
