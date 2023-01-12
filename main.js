const nemo = ['nemo'];
const everyone = ['nemo', 'james', 'harry', 'david', 'dunk guy', 'drunk guy', 'dank guy', 'dark guy', 'token girl', 'token young girl'];
const large = new Array(100000).fill('nemo');
function findNemo(array) {
    array.forEach(element => {
        if ( element === 'nemo' ) console.log('found meono');
    });
}

// findNemo(large); // O(n) - Linear time

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function logFirstTwoBoxes(array) {
    console.log(array[0]);
    console.log(array[1]);
}

// logFirstTwoBoxes(boxes);

function logAllPairsOfArray(array) {
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);