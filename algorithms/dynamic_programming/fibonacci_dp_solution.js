let calc = 0;
function findFibonacciLoopingAlsoMemoization(number) { // O(n)
    const fibonacci = [0, 1];
    for ( let i = 2; i <= number; i++ ) {
        calc++;
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[number];
}

let calculations = 0;
function findFibonacciRecursive(number) { // O(2 ^ n)
    calculations++;
    if ( number === 0 ) return 0;
    if ( number === 1 ) return 1;
    return findFibonacciRecursive(number - 1) + findFibonacciRecursive(number - 2);
}

console.log("Memoization:" + findFibonacciLoopingAlsoMemoization(42));
console.log("Recursion:" + findFibonacciRecursive(42));
console.log(calc);
console.log(calculations);