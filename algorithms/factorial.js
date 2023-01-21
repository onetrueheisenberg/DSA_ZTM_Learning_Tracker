function findFactorialLooping(number) {
    let factorial = 1;
    for ( let i = 2; i <= number; i++ ) {
        factorial *= i;
    }
    return factorial;
}

function findFactorialRecursive(number) {
    if ( number === 1 ) return 1;
    if ( number === 2 ) return 2; 
    return number * findFactorialRecursive(number - 1);
}

console.log("Loops:" + findFactorialLooping(5));
console.log("Recursion:" + findFactorialRecursive(5));