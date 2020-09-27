// spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];

console.log(musica) // saída >>>[ 'cabeça', 'ombro', 'joelhos', 'e', 'pés' ]

function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);
