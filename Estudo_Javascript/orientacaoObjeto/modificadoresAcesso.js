// function Person(inicialName) {
//     let name = inicialName;
//     this.getName = function() {
//         return name;
//     }
//     this.setName = function(newName) {
//         name = newName;
//     }
// }

const p = new Person('drika');
// console.log(p); //getNome and setNome 

console.log(p.getName()); //drika
p.setName('Drika Garibalde');
console.log(p.getName()); //Drika Garibalde
