const name = 'Drika'

//name = 'Drikas' // não podemos alterar o valor
//console.log(name)

const user = {
    name: 'Drika'
}
user.name = 'Drikas Garibalde'
console.log(user.name) // mas se for um objeto podeomos trocar suas propriedades

/*user = {
    name: 'Dri'
}*/
//console.log(user.name) // Não podemos fazer o objeto "apontar" para outro lugar
const persons = ['Drika', 'Maria', 'Félix']
    //Podemos adicionar mais itens
persons.push('João')
console.log(persons)

persons.shift() //remover o 1º elemento
console.log(persons)
    //Podemos alterar diretamente
persons[2] = 'Drikas'
console.log(persons)
