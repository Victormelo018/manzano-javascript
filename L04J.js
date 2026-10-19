alert("dividendo,divisor, quociente")


let dividendo, divisor, quociente

dividendo = parseInt(prompt("Digite o dividendo"))
divisor = parseInt(prompt("Digite o divisor"))

quociente = 0

do {

    if (dividendo >= divisor){


    dividendo = dividendo - divisor

    quociente = quociente +1
    
     }
}while(dividendo >= divisor)

    alert(`o quociente é ${quociente} e a sobra é ${dividendo}`)