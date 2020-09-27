function Pessoa() {
    return {
        nome: 'Drika_1',
        lastName: 'Garibalde'
    }
}
const p = Pessoa();
console.log(p)
    // saída - { nome: 'Drika_1', lastName: 'Garibalde' }
function Pessoa2(name) {
    return {
        name,
        lastName: 'Garibalde'
    }
}
const p2 = Pessoa2('Drikas_2');
console.log(p2)
    // saida - { name: 'Drikas_2', lastName: 'Garibalde' }
function Pessoa3(customProperties) {
    return {
        name: 'Drika_3',
        lastName: 'Garibalde',
        ...customProperties
    }
}
const p3 = Pessoa3({ name: 'Drika Teste3', age: 44 });
console.log(p3)
    // saída - { name: 'Drika Teste3', lastName: 'Garibalde', age: 44 }
