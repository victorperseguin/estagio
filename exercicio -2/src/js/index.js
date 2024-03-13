
function verificarFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  while (atual <= numero) {
      if (atual === numero) {
          return true;
      }

      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
  }

  return false;
}

let numeroInformado = parseInt(prompt("Informe um número:"));

if (verificarFibonacci(numeroInformado)) {
  alert(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
  alert(numeroInformado + " não pertence à sequência de Fibonacci.");
}


