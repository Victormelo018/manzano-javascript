alert("graos em casa de xadrez ")

let casa, grao, total

casa = 1
grao = 1 
total = 1

do {
    casa = casa + 1 
    grao = grao * 2
    total = total + grao

} while (casa < 64)

    console.log(`${total}`)
    alert(`${total}`)