# Análise de Faturamento Anual

Este projeto realiza uma análise básica do faturamento anual de uma empresa, gerando dados fictícios e calculando métricas importantes.

## Estrutura do Projeto

O código consiste em quatro partes principais:

1. Geração de dados
2. Análise do faturamento
3. Interface de resultado
4. Função principal

## Funcionalidades

### 1. Geração de Dados

A função `gerarFaturamentoAnual()` cria um array de 365 números, simbolizando o faturamento diário de um ano. Ela usa uma distribuição aleatória para gerar valores realistas:

- 70% das vezes, gera um valor entre R$ 1.000 e R$ 10.000
- 30% das vezes, gera um valor de R$ 0 (simulando dias sem faturamento)

### 2. Análise do Faturamento

A função `analisarFaturamento()` recebe o array de faturamento e retorna um objeto `ResultadoAnalise` com as seguintes informações:

- `menorValor`: O menor valor de faturamento registrado
- `maiorValor`: O maior valor de faturamento registrado
- `diasAcimaDaMedia`: Número de dias em que o faturamento superou a média anual

### 3. Interface de Resultado

A interface `ResultadoAnalise` define a estrutura do objeto retornado pela função de análise.

### 4. Função Principal

A função `main()` coordena todo o processo:

1. Gera o faturamento anual
2. Analisa os dados
3. Imprime os resultados no console

## Execução

Para executar o código:

1. Salve-o em um arquivo com extensão `.ts` (por exemplo, `faturamento.ts`)
2. Certifique-se de ter o TypeScript instalado globalmente (`npm install -g typescript`)
3. Compile o arquivo: `tsc faturamento.ts`
4. Execute o script Node.js resultante: `node faturamento.js`
