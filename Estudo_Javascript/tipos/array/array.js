const user = ['Drika', 'Maria', 'Félix']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const persons = [{
        name: 'Drika',
        age: 44,
        gender: gender.WOMAN
    },
    {
        name: 'Maria',
        age: 16,
        gender: gender.WOMAN
    },
    {
        name: 'Félix',
        age: 49,
        gender: gender.MAN
    }
]

// Retornar a quantidade de itens de um array;
// console.log('Itens: ', persons.length); //3

// Verificar se é array
// console.log('A variável persons é um array: ', Array.isArray(persons)); //true

// Iterar os ítens do array
// persons.forEach((person, index, arr) => {
//     console.log(`Nome: ${person.name} index: ${index}`, arr);
// })

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN); //retornam um novo array = novo objeto
// console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo
const personsWithCouse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
});
// consosle.log('\nPessoas com a adição do course: ', personsWithCouse) //retorna um novo array

// Transformar um array em outro tipo, 1ºparâmetro é o que vou retornar, o 2º é o parâmetro incial
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
// console.log('\nSoma de idade das pessoas: ', totalAge);

// 
// Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par: ', totalEvenAges)
