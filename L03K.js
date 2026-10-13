alert("Calcular a área total da residência")


let largura,comprimento, area, nome,resp

area = 0

resp = 'sim'
while ( resp === 'sim'){
nome = prompt("digite o nome do comodo")

largura = parseFloat(prompt("qual o tamanho da largura do ambiente ?"))

comprimento = parseFloat(prompt("qual é o tamanho do comprimento do ambiente ?"))

area = area + (largura * comprimento)

alert("Área do cômodo " + nome +": "+(largura * comprimento) + "m²")

resp = prompt("Voce deseja continuar calculando novos comodos, sim ou nao ?").toLocaleLowerCase()
}

alert("Área total da residência: " + area + " m²")

