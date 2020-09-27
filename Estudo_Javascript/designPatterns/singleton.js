function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}
const p = Pessoa.call({ name: 'Drika' });
const p2 = Pessoa.call({ name: 'Adriana' });

console.log(p); //{ name: 'Drika' }
console.log(p2); //{ name: 'Drika' }
