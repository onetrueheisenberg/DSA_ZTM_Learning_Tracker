function reverseString(string) {
    const arr = new Array(string.length);
    let i = string.length - 1;
    for ( const char of string ) {
        arr[i] = char;
        i--;
    }
    return arr.join("");
}

console.log(reverseString('james is a liar'));
//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {
    console.log(str);
    console.log(str.substring(1));
    console.log(str.charAt(0));
    if ( str === "" ) return str;
    else return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

console.log(reverseStringRecursive('yoyo mastery'))
//should return: 'yretsam oyoy'