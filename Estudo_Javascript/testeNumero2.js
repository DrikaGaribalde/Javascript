var resultado1 = (Math.pow(10,-2.1))*3.25;
console.log(resultado1);
//
var resultado2 = (Math.pow(10,-2.7))*9.75;
console.log(resultado2);

var total = (resultado1 + resultado2) / (3.25+ 9.75);
console.log(total);
//
var r = 10 * (Math.log10(1/total));
console.log(r);