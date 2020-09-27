//retorna o tamanho de uma string
const textSize = 'texto'.length;
console.log('Quantidade de letras: ' + textSize);

//retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//busca por um valor ou substitui por outro 
const replaceText = 'texto'.replace('texto', 'txeT')
console.log('\nSubstituição de valor: ', replaceText)

//retorna a 'fatia' de um valor
const lastChar = 'texto'.slice(-1)
console.log('\nÚltima letra de uma string: ', lastChar) //o

const allWithOutLastChar = 'texto'.slice(0, -1)
console.log('\nValor da string da primeira letra menos a última: ', allWithOutLastChar) //text

const secondToEnd = 'texto'.slice(1)
console.log('\nValor da string da segunda letra até a última: ', secondToEnd) //exto

// retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'texto'.substr(0, 2)
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos) //te
