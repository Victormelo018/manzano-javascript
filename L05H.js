alert("potencia e expoente")

let base, expoente,potencia,contador

potencia = 1 



base = parseInt(prompt("qual valor da base da sua potencia ?"))

expoente = parseInt(prompt("qual o expoente da sua base ?"))

for(contador = 0; contador < expoente; contador ++){
    potencia = potencia * base

    

}

alert(`${base} elevado a ${expoente} = ${potencia}`)


