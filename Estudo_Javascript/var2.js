var teste = 'drika escopo Var';
(() => {
    console.log(`valor dento da função "${teste}"`)

    if (true) {
        var teste = 'exemplo'
        console.log(`valor dentro if "${teste}"`)
    }
    console.log(`valor após a execução do if "${teste}"`)
})();
