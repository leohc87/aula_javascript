//retorna tamanho da string
const textSize = 'Texto';
const textSize = 'Texto'.length;
console.log('Quantidade de letras: ${textSize}');

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posicoes separadas por delimitador', splittedText);

//busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacedText);

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra ate a ultima:', secondToEnd);

