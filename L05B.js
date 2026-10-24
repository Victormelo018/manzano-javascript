alert("tabuada")

let numero,vezes, resultado

 numero = parseInt(prompt("qual numero deseja para fazer a tabuada "))

for(vezes = 1; vezes <= 10; vezes++){

    resultado = numero * vezes
    alert(`${numero} * ${vezes} = ${resultado}`)
}

