let user = {
        name: 'Drika'
    }
    // console.log(user)

// alternativa a propriedade de um objeto:
user.name = 'Outro nome_1'
    // console.log(user)

user['name'] = 'outroNome_2'
    // console.log(user)

const prop = 'name'
user[prop] = 'outroNome_3' // é igual a user['name'] = 'outroNome_3' 
    // console.log(user)
    // // criando uma propriedade
user.lastName = 'Garibalde'
console.log(user)

// // deletando uma propriedade
delete user.name;
console.log(user)
