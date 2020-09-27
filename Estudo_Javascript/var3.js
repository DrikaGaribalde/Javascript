//var teste = 'drika escopo Var';
(() => {
    let teste = 'valor função'
    console.log(`valor dento da função "${teste}"`)

    if (true) {
        let teste = 'exemplo'
        console.log(`valor dentro if "${teste}"`)
    }
    console.log(`valor após a execução do if "${teste}"`)
})();
