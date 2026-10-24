alert("fatorial dos impares")

let numero, fatorial, contador

for (numero =1; numero <= 10; numero ++){

    if (numero % 2 === 1){
        fatorial = 1

            for(contador = 1; contador <= numero; contador ++){
                fatorial = fatorial * contador
            
        }
        alert(`${numero}! = ${fatorial}`)
    }
}