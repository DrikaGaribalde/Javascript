let loggedIn = true;

function callIfAuthentication(fn) {
    return !!loggedIn && fn();
}

function soma(a, b) {
    return a + b;
}
console.log(callIfAuthentication(() => soma(2, 3)));
