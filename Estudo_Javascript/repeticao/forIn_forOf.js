let arr = [3, 5, 7];
arr.foo = 'hello';

// for (let i in arr) {
//     console.log(i) // '0', '1', '2', 'foo' ** lista os índices
// }

for (let i of arr) {
    console.log(i) // '3', '5', '7' ** lista os valores numéricos
}
