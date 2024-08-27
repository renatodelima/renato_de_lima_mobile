let vetor = [];

function adicionarValor() {

  const valor = Number(document.getElementById('valor').value);


  if (!isNaN(valor)) {

    vetor.push(valor);

    const tabela = document.getElementById("tabelaValores").getElementsByTagName('tbody')[0];

    const novaLinha = tabela.insertRow();
    const celula = novaLinha.insertCell(0);
    celula.textContent = valor;

    document.getElementById('valor').value = '';
    document.getElementById('valor').focus();
  }

}

 function contarNumeros() {

   const tabela = document.getElementById('tabelaNumeros').getElementsByTagName('tbody')[0];

        let positivos = 0;
        let negativos = 0;

        vetor.forEach(num => {
          const linha = tabela.insertRow();
          const celulaNumero = linha.insertCell();
          const celulaTipo = linha.insertCell();
            if (num > 0) {
              positivos++;
              celulaTipo.textContent = 'Positivo';
            } else {
              negativos++;
              celulaTipo.textContent = 'Negativo';
            }
        });


 }

/*

  function monstrarPares() {

    const tabela = document.getElementById('tabelaPares').getElementByTagName('tbody')[0];

    for (let i = 0; i < vetor.length; i++) {
      const valor = vetor [i];
      if(valor % 2 === 0) {
        const linh = tabela .insertRow();
        const celula = linha.insertCell();
        celula.textContent = valor;
      }
    }
  }
*/
