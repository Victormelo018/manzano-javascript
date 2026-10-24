alert("soma pares de 1 a 500")

let numero, somatorio

numero = 1
somatorio =0

for( numero = 1; numero <= 500; numero ++) {

    if (numero % 2 === 0){
        somatorio = somatorio + numero
    }
}

alert(`${somatorio}`)