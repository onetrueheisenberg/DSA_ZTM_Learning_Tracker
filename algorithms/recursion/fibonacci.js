function findFibonacciLooping(number) { // O(n)
    const fibonacci = [0, 1];
    for ( let i = 2; i <= number; i++ ) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[number];
}

function findFibonacciRecursive(number) { // O(2 ^ n)
    if ( number === 0 ) return 0;
    if ( number === 1 ) return 1;
    return findFibonacciRecursive(number - 1) + findFibonacciRecursive(number - 2);
}

console.log("Loops:" + findFibonacciLooping(200));
console.log("Recursion:" + findFibonacciRecursive(200));