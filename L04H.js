alert("area total - residencia")

let nome,largura,comprimento,area,totalArea, resp

area = 0
totalArea = 0

do{

     resp = prompt("voce deseja calcular a area de um comodo ? ")

      if ( resp === "sim") {

    area = 0
    largura = 0
    comprimento = 0

    nome = prompt("qual o comodo da casa  ?")

    largura = parseFloat(prompt("qual é o tamanho da largura do comodo ? "))

    comprimento = parseFloat(prompt("qual é o comprimento do ambiente"))

    area = largura * comprimento

    alert(`A área do comodo ${nome} é : ${area} m²`)

    totalArea = totalArea + area
}

else{ 
    alert("voce decidiu nao calcular a area do comodo")
}
    }while (resp === "sim")

alert(` o total do calculo dos comodos foi ${totalArea}`)
