function containsCommonItemBruteForce(array1, array2) {
    let containsCommonItems = false;
    array1.forEach(elArray1 => {
        array2.forEach(elArray2 => {
            if ( elArray1 === elArray2 ) containsCommonItems = true;
        });
    });
    // for ( let i = 0; i < array1.length; i++ ) {
    //     for ( let j = 0; j < array2.length; j++ ) {
    //         if ( array1[i] === array2[j] ) return true;
    //     }
    // }
    return containsCommonItems;
}

function containsCommonItems(array1, array2) {
    let map = {}
    if ( !array1 || !array2 ) return false;
    for ( const element of array1 ) {
        if ( !map[element] ) map[element] = true;
    }
    for ( const element of array2 ) {
        if ( map[element] ) return true;
    }
    return false;
}

function containsCommonItemsBestCase(array1, array2) {
    if ( !array1 || !array2 ) return false;
    return array1.some(element => array2.includes(element));
}

console.log(containsCommonItemBruteForce(['a', 'e', 'i', 'o', 'u', 'y'], ['w', 'r', 't', 'p', 's', 'd']));
console.log(containsCommonItemBruteForce(['a', 'e', 'i', 'o', 'u', 'y'], ['w', 'y', 'r', 't', 'p', 's', 'd']));

console.log(containsCommonItems(['a', 'e', 'i', 'o', 'u', 'y'], ['w', 'r', 't', 'p', 's', 'd']));
console.log(containsCommonItems(['a', 'e', 'i', 'o', 'u', 'y'], ['w', 'y', 'r', 't', 'p', 's', 'd']));
console.log(containsCommonItems(['a', 'e', 'i', 'o', 'u', 'y']));

console.log(containsCommonItemsBestCase(['a', 'e', 'i', 'o', 'u', 'y'], ['w', 'r', 't', 'p', 's', 'd']));
console.log(containsCommonItemsBestCase(['a', 'e', 'i', 'o', 'u', 'y'], ['w', 'y', 'r', 't', 'p', 's', 'd']));
console.log(containsCommonItemsBestCase(['a', 'e', 'i', 'o', 'u', 'y']));