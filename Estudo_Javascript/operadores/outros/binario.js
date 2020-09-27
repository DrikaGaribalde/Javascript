// in;
something in somethingItems;

// Array
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro')
0 in arvores; // true
3 in arvores; // true
6 in arvores; // false
'cedro' in arvores; //você pode especificar o indice não o valor
'lenght' in arvores; // retorna true (lenght é uma propriedade de Array)

// console.log('cedro' in arvores)

// objetos predefinidos
'PI' in Math; //true
var minhaString = new String('coral');
'lenght' in minhaString; // textUnderlinePosition: 

// console.log('PI' in Math)

// objetos personalizados
var meucarro = { marca: 'Honda', modelo: 'Accord', ano: 1998 };
'marca' in meucarro; //true
'modelo' in meucarro; //true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    // code here
    console.log(dia)
}
