alert("Fatorial de 15 valores");

let valor, fatorial, diminuicao, contador, total;

total = 0;
contador = 0;

do {
    valor = parseInt(prompt("Digite um valor:"));

    if (valor >= 0) {
        fatorial = 1;
        diminuicao = valor;

        if (diminuicao > 0) {
            do {
                fatorial = fatorial * diminuicao;
                diminuicao = diminuicao - 1;
            } while (diminuicao > 0);
        }

        total = total + fatorial;
    } else {
        alert("Não existe fatorial de número negativo.");
    }

    contador = contador + 1;

} while (contador < 15);

alert(`A soma dos fatoriais é: ${total}`);