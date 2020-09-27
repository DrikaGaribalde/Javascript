// and lógico (&&)
exp1 && exp2

var a1 = true && true; // retorna true
var a2 = true && false; // retorna false
var a3 = false && true; // retorna false
var a4 = false && (3 == 4); // retorna false
var a5 = 'Gato' && 'Cão'; // retorna Cão
var a6 = false && 'Gato'; // retorna false
var a7 = 'Gato' && false; // retorna false


// or lógico (||)
exp1 || exp2

var a1 = true || true; // retorna true
var a2 = true || false; // retorna true
var a3 = false || true; // retorna true
var a4 = false || (3 == 4); // retorna false
var a5 = 'Gato' || 'Cão'; // retorna 'Gato'
var a6 = false || 'Gato'; // retorna 'Gato'
var a7 = 'Gato' || false; // retorna 'Gato'


// not lógico (!)
!exp1

var a1 = !true; // retorna false
var a2 = !false; // retorna true
var a3 = !'Gato'; // retorna false
