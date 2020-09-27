const myNumber = 12.4032

// Transformar números para string
const numberAsString = myNumber.toString()
console.log('Número transformado em string: ', typeof numberAsString) //12.4032

// retorna número com casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals) //12.40

// transforma uma string em float: 
console.log('\nString parseada para float: ', parseFloat('12.33')) //12.33

// transforma uma string em int:
console.log('\nString parseada para int: ', parseInt('13.20')) //13
