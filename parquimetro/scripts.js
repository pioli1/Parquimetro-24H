class Parquimetro {
  constructor(valorInserido) {
    this.valorInserido = parseFloat(valorInserido);
    this.tabelaValores = [
      { valor: 1.00, tempo: 30 },
      { valor: 1.75, tempo: 60 },
      { valor: 3.00, tempo: 120 }
    ];
  }

  calcularTempo() {
    if (this.valorInserido < 1.00) {
      return { mensagem: 'Valor insuficiente. Mínimo: R$1,00.' };
    }

    let tempo = 0;
    let valorBase = 0;

    for (let i = this.tabelaValores.length - 1; i >= 0; i--) {
      if (this.valorInserido >= this.tabelaValores[i].valor) {
        tempo = this.tabelaValores[i].tempo;
        valorBase = this.tabelaValores[i].valor;
        break;
      }
    }

    const troco = (this.valorInserido - valorBase).toFixed(2);

    return {
      tempo: tempo,
      troco: parseFloat(troco)
    };
  }
}

function simular() {
  const valorInput = document.getElementById('valorInput').value;
  const parquimetro = new Parquimetro(valorInput);
  const resultado = parquimetro.calcularTempo();
  const divResultado = document.getElementById('resultado');

  if (resultado.mensagem) {
    divResultado.innerHTML = `<p style="color: red;">${resultado.mensagem}</p>`;
  } else {
    divResultado.innerHTML = `
      <p>Tempo de permanência: ${resultado.tempo} minutos</p>
      <p>Troco: R$${resultado.troco.toFixed(2)}</p>
    `;
  }
}
