alert("fatorial dos impares")

let numero,fatorial,diminuidor

numero = 1
fatorial = 1
diminuidor = 0

do {

    diminuidor = numero 
    fatorial = 1
    
   if ( numero % 2 === 1) {

    do {

   

    fatorial = fatorial * diminuidor
    diminuidor = diminuidor -1
   
    } while (diminuidor > 1 )

            alert( `${numero} ! =${fatorial}`)

        }

numero = numero + 1


}while (numero <= 10)

