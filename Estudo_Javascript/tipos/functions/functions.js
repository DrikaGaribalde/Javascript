function fn() {
    return 'Code here'
}
// const arrowFn = () => 'Code Here 1'
// const arrowFn2 = () => {
//     // mais de uma expressão
//     return 'Code Here 2'
// }

// // Funções também são objetos;
// fn.prop = 'Posso criar propriedades'
// console.log(fn())
// console.log(fn.prop)

// receber parâmetros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

// logFnResult(fn)

// const controlFnExec = fnParam => allowed => {
//     if (allowed) {
//         fnParam()
//     }
// }
const handleFnExecution = controlFnExec(fn)
handleFnExecution(true) //executará a função fn;
handleFnExecution() // não executará a função fn;


// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam()
        }
    }
}
