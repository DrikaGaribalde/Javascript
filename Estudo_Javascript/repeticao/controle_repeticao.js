// break;
console.log('Exemplo de utilização do break')

var index = 0;
while (true) {
    index++
    if (index > 2) {
        break;
    }
    console.log(index);
}

// continue
console.log('\nExemplo de utilização do continue')

const array = [1, 2, 3, 4, 5, 6]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
        continue; //pulou todos os pares**
    }
    console.log(element); // só imprime os ímpares **
}
