const user = {
    name: 'Drika',
    lastName: 'Garibalde'
}

// Recupera as chaves do objeto:
console.log('Propriedades do objeto user: ', Object.keys(user))

// Recupera os valores das chaves do objeto:
console.log('\nValores das propriedades do objeto user: ', Object.values(user))

// Retorna um array de arrays contendo[nome_prop,valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user))

// Margear propriedades de objetos:
Object.assign(user, { fulName: 'Drika Garibalde' })

console.log('\nAdiciona a propriedade fullName ao objeto user: ', user)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, { age: 44 }))
    //1º parâmetro um array vazio

// Previne todas as alteraões em um objeto:
const newObj = { foo: 'bar' }
Object.freeze(newObj)
console.log(newObj)

newObj.foo = 'changes'
delete newObj.foo
console.log('\nVariável newObj após as alterações: ', newObj)

// Permite apenas a alteração de propriedades existentes em um objeto:  //Não cria nem deleta
const person = { name: 'Drikas' }
Object.seal(person)
console.log(person)

person.name = 'Drikas Garibalde'
delete person.name
person.age = 44

console.log('\nVariável person após as alterações: ', person)
