function gerarFaturamentoAnual(): number[] {
  return Array.from({ length: 365 }, () =>
    Math.random() > 0.3 ? Math.random() * 9000 + 1000 : 0
  );
}

interface ResultadoAnalise {
  menorValor: number;
  maiorValor: number;
  diasAcimaDaMedia: number;
}

function analisarFaturamento(faturamento: number[]): ResultadoAnalise {
  const diasComFaturamento = faturamento.filter((valor) => valor > 0);

  if (diasComFaturamento.length === 0) {
    return { menorValor: 0, maiorValor: 0, diasAcimaDaMedia: 0 };
  }

  const menorValor = Math.min(...diasComFaturamento);
  const maiorValor = Math.max(...diasComFaturamento);

  const mediaAnual =
    diasComFaturamento.reduce((sum, valor) => sum + valor, 0) /
    diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (valor) => valor > mediaAnual
  ).length;

  return { menorValor, maiorValor, diasAcimaDaMedia };
}

function main() {
  const faturamentoAnual = gerarFaturamentoAnual();
  const resultado = analisarFaturamento(faturamentoAnual);

  console.log(
    `Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`
  );
  console.log(
    `Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`
  );
  console.log(
    `Número de dias acima da média anual: ${resultado.diasAcimaDaMedia}`
  );
}

main();
