const symbol1 = Symbol()
const symbol2 = Symbol()

// Symbol são únicos
console.log('symbol1 é igula a symbol2: ', symbol1 === symbol2) //false

// ------------Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('mame')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Drika',
    [nameSymbol2]: 'Dri', //não consegue sobrescrever mesmo tendo o mesmo nome
    lastName: 'Garibalde'
}
console.log(user)

// Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}
console.log('Propriedades do objeto user: ', Object.keys(user))
console.log('\nValores das propriedades do objeto user: ', Object.values(user))

// Exibe symbols de um objeto:
console.log('\nSymbols registrados no objeto user: ', Object.getOwnPropertySymbols(user))

// Acessando todas as propriedades do objeto:
console.log('\nTodas propriedades do objeto user: ', Reflect.ownKeys(user))

// Cria um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}
