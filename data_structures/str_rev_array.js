function reverse(string) {
    if ( !string || string.length < 2 || typeof string !== 'string' ) return string;
    let arr = new Array(string.length);
    let i = arr.length - 1;
    for ( const char of string) {
        arr[i] = char;
        i--;
    }
    return arr.join('');
}

function reverseLib(string) {
    return string.split('').reverse().join('');
}

const reverseES6 = (string) => string.split('').reverse().join('');
const reverseSimpleES6 = (string) => [...string].reverse().join('');

const str = 'rail a si semaj';
const strLib = 'james is a failure';
const strES6 = 'retaehc a si semaj';
const strSimpleES6 = 'james is a moron';
console.log(reverse(str));
console.log(reverseLib(strLib));
console.log(reverseES6(strES6));
console.log(reverseSimpleES6(strSimpleES6));