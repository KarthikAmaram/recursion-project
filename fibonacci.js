fibonacci = [0, 1];

function fibs(n) {
    for (let i = 2; i < n; i++) {
        let next_val = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(next_val);
    }
    return fibonacci;
}

function fibsRec(n) {
    if (fibonacci.length === n) {
        return fibonacci;
    }
    let next_val = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
    fibonacci.push(next_val);
    return fibsRec(n);
}

console.log(fibsRec(10));